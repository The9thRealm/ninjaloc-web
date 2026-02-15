"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Terminal, Send, Lock } from "lucide-react";

export default function RemoteTerminal() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [command, setCommand] = useState("");
  const [bridgeUrl, setBridgeUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  // Security Protocol: Active
  const MASTER_CODE = "Godmode333$"; 

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_CODE) {
      setIsAuthorized(true);
      const savedUrl = localStorage.getItem("ninjaloc_bridge_url");
      if (savedUrl) setBridgeUrl(savedUrl);
    } else {
      alert("ACCESS DENIED");
      setPassword("");
    }
  };

  const sendCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = bridgeUrl || localStorage.getItem("ninjaloc_bridge_url");
    
    if (!command) return;
    if (!targetUrl) {
      setLogs(prev => ["✕ Error: Bridge URL is required. Please enter your ngrok URL.", ...prev]);
      return;
    }

    setStatus("sending");
    const currentCommand = command;
    setCommand(""); // Clear immediately for UX
    setLogs(prev => [`> ${currentCommand}`, ...prev]);

    try {
      // Ensure we have a clean URL
      const cleanUrl = targetUrl.replace(/\/$/, ""); 
      
      const response = await fetch(`${cleanUrl}/command`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: currentCommand }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        if (data.response) {
          const cleanResponse = typeof data.response === 'string' 
            ? data.response 
            : JSON.stringify(data.response, null, 2);
          
          setLogs(prev => [cleanResponse, ...prev]);
        }
      } else {
        throw new Error(data.message || "Bridge error");
      }
    } catch (err) {
      setStatus("error");
      setLogs(prev => [`✕ Transmission failure: ${err instanceof Error ? err.message : "Network error"}. Ensure ngrok is HTTPS.`, ...prev]);
      setCommand(currentCommand); // Restore command on failure
    } finally {
      setStatus("idle");
    }
  };

  const saveUrl = (url: string) => {
    setBridgeUrl(url);
    localStorage.setItem("ninjaloc_bridge_url", url);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md horror-border bg-black/40 p-8 space-y-8 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full border border-crimson/30 flex items-center justify-center text-crimson animate-pulse">
              <Shield size={32} />
            </div>
            <h1 className="text-xl font-bold tracking-[0.3em] uppercase">Security Protocol</h1>
            <p className="text-xs text-bone/40 font-mono">AUTHORIZED PERSONNEL ONLY</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER ACCESS CODE"
              className="w-full bg-void border-b border-white/10 p-4 font-mono text-center focus:outline-none focus:border-crimson transition-colors uppercase tracking-widest"
              autoFocus
            />
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-crimson hover:text-white transition-all">
              INITIALIZE
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-[#39ff14] font-mono p-4 md:p-12 selection:bg-[#39ff14] selection:text-black">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-[#39ff14]/20 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-3">
              <Terminal className="text-[#39ff14]" /> Remote Uplink
            </h1>
            <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Status: Encrypted Tunnel Active</p>
          </div>
          <div className="text-right space-y-2">
            <label className="text-[10px] block opacity-60 uppercase">Bridge Endpoint (Ngrok HTTPS)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={bridgeUrl}
                onChange={(e) => setBridgeUrl(e.target.value)}
                placeholder="https://xxxx.ngrok-free.app"
                className="bg-black border border-[#39ff14]/30 px-3 py-1 text-[#39ff14] text-xs w-64 focus:border-[#39ff14] outline-none placeholder:opacity-20"
              />
              <button 
                onClick={() => saveUrl(bridgeUrl)}
                className="text-[10px] border border-[#39ff14]/50 px-2 py-1 hover:bg-[#39ff14] hover:text-black transition-colors"
              >
                SET
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <form onSubmit={sendCommand} className="relative">
              <input 
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Awaiting instruction..."
                className="w-full bg-black border border-[#39ff14]/30 p-6 pr-20 text-lg focus:outline-none focus:border-[#39ff14] transition-all placeholder:opacity-20 text-[#39ff14]"
              />
              <button 
                disabled={status === "sending"}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-[#39ff14] hover:scale-110 transition-transform disabled:opacity-20"
              >
                <Send size={24} />
              </button>
            </form>

            <div className="border border-[#39ff14]/20 bg-black/50 p-6 h-96 overflow-y-auto space-y-4 custom-scrollbar shadow-[0_0_15px_rgba(57,255,20,0.05)]">
              <AnimatePresence initial={false}>
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-xs whitespace-pre-wrap ${
                      log.startsWith('>') 
                        ? 'text-[#39ff14]/60 font-mono italic' 
                        : log.startsWith('✓') 
                        ? 'text-green-400' 
                        : log.startsWith('✕')
                        ? 'text-red-500'
                        : 'text-[#39ff14] border-l-2 border-[#39ff14]/30 pl-3 py-1'
                    }`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              {logs.length === 0 && <p className="text-[#39ff14]/20 text-center mt-32 italic">No transmission history</p>}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-[#39ff14]/20 rounded-lg space-y-4 shadow-[0_0_10px_rgba(57,255,20,0.02)]">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">System Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-60 uppercase">Environment</span>
                  <span className="text-[#39ff14] font-bold">Tesla_Uplink_v1</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-60 uppercase">Bridge</span>
                  <span className={bridgeUrl ? "text-green-400" : "text-[#39ff14] animate-pulse font-bold"}>
                    {bridgeUrl ? "CONNECTED" : "MISSING"}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-[#39ff14]/10 rounded-lg bg-[#39ff14]/5">
              <p className="text-[10px] leading-relaxed opacity-70">
                Commands sent here are transmitted via the secure bridge to your local terminal instance. 
                Ensure the bridge server is running on the target machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
