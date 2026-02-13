import Hero from "@/components/Hero";
import Roster from "@/components/Roster";
import Records from "@/components/Records";
import { Music, Users, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Philosophy / Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard 
          icon={<Users size={24} />}
          title="The Roster"
          description="A brotherhood of underground architects, redefining the sound of the streets."
        />
        <FeatureCard 
          icon={<Music size={24} />}
          title="NinjaLOC Records"
          description="Uncompromising releases. The sounds the industry is afraid to amplify."
        />
        <FeatureCard 
          icon={<ShieldAlert size={24} />}
          title="The Collective"
          description="Autonomous, artist-led, and boundary-pushing. Join the manifest."
        />
      </section>

      <Roster />
      
      <Records />

      {/* Footer / Manifesto */}
      <section className="py-32 border-t border-white/5 bg-void">
        <div className="max-w-4xl mx-auto text-center space-y-8 px-6">
          <h3 className="text-3xl font-bold tracking-[0.3em] uppercase opacity-80">
            NinjaLOC
          </h3>
          <p className="text-bone/30 font-light italic leading-loose">
            "We are the architects of the unseen. The sound of the shadows. 
            The collective is the control. The control is none."
          </p>
          <div className="pt-12 flex flex-col items-center gap-4">
            <p className="text-[10px] tracking-[0.5em] uppercase opacity-20">Owned by NinjaLOC Records & BLVCKMVGICK</p>
            <div className="w-12 h-px bg-crimson opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="horror-border p-8 space-y-4 group">
      <div className="text-crimson transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h4 className="text-xl font-bold uppercase tracking-widest">{title}</h4>
      <p className="text-bone/50 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
