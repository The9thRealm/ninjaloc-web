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
    if (!command || !bridgeUrl) return;

    setStatus("sending");
    setLogs(prev => [`> ${command}`, ...prev]);

    try {
      const response = await fetch(`${bridgeUrl}/command`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command }),
      });

      if (response.ok) {
        setStatus("success");
        setLogs(prev => ["✓ Command transmitted successfully", ...prev]);
        setCommand("");
      } else {
        throw new Error("Failed to transmit");
      }
    } catch (err) {
      setStatus("error");
      setLogs(prev => ["✕ Transmission failure. Check bridge/ngrok URL.", ...prev]);
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
    <div className="min-h-screen bg-void text-bone font-mono p-4 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-white/5 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-3">
              <Terminal className="text-crimson" /> Remote Uplink
            </h1>
            <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">Status: Encrypted Tunnel Active</p>
          </div>
          <div className="text-right space-y-2">
            <label className="text-[10px] block opacity-40 uppercase">Bridge Endpoint (Ngrok URL)</label>
            <input 
              type="text" 
              value={bridgeUrl}
              onChange={(e) => saveUrl(e.target.value)}
              placeholder="https://your-id.ngrok-free.app"
              className="bg-black/50 border border-white/10 px-3 py-1 text-xs w-64 focus:border-crimson outline-none"
            />
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
                className="w-full bg-black/40 border border-white/10 p-6 pr-20 text-lg focus:outline-none focus:border-crimson/50 transition-all placeholder:opacity-20"
              />
              <button 
                disabled={status === "sending"}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-crimson hover:scale-110 transition-transform disabled:opacity-20"
              >
                <Send size={24} />
              </button>
            </form>

            <div className="horror-border bg-black/20 p-6 h-96 overflow-y-auto space-y-3 custom-scrollbar">
              <AnimatePresence initial={false}>
                {logs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-xs ${log.startsWith('>') ? 'text-bone/60' : log.startsWith('✓') ? 'text-green-500' : 'text-crimson'}`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              {logs.length === 0 && <p className="text-bone/10 text-center mt-32 italic">No transmission history</p>}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-white/5 rounded-lg space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">System Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-40 uppercase">Environment</span>
                  <span className="text-crimson">Tesla_Uplink_v1</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="opacity-40 uppercase">Bridge</span>
                  <span className={bridgeUrl ? "text-green-500" : "text-crimson"}>{bridgeUrl ? "CONFIGURED" : "MISSING"}</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/5 rounded-lg bg-crimson/5">
              <p className="text-[10px] leading-relaxed opacity-60">
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
