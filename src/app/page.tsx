import Hero from "@/components/Hero";
import { Music, Users, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Sections Preview */}
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

      {/* Placeholder for future sections */}
      <section className="py-24 border-t border-white/5 bg-shadow/30">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold tracking-widest uppercase opacity-20">
            More to emerge soon
          </h3>
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