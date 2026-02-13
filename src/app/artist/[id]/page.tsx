import { artists, Artist } from "@/data/collective";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Instagram, Music, Disc, Share2 } from "lucide-react";
import Link from "next/link";

// Generate static params for all artists
export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }));
}

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-void text-bone selection:bg-crimson selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        {/* Header Dossier */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-l-2 border-crimson pl-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2">
              {artist.name}
            </h1>
            <p className="text-crimson font-mono text-sm uppercase tracking-[0.3em]">
              {artist.role}
            </p>
          </div>
          <Link href="/#roster" className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 hover:text-white transition-colors pb-2">
            [ Return to Manifest ]
          </Link>
        </div>

        {/* Bio / Intel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-sm font-mono uppercase text-white/40 tracking-widest">
              Subject Profile
            </h3>
            <p className="text-xl font-light leading-relaxed text-white/80">
              {artist.bio}
            </p>
            <p className="text-white/40 leading-relaxed">
              Operating from the shadows, {artist.name} represents a key pillar of the NinjaLOC manifest. 
              Their soundscape defines the boundaries of the void.
            </p>
          </div>

          {/* Links / Actions */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono uppercase text-white/40 tracking-widest">
              Transmission Links
            </h3>
            
            <div className="flex flex-col gap-4">
              <Link href={artist.platforms.instagram || "#"} target="_blank" className="flex items-center gap-4 p-4 border border-white/10 hover:border-crimson hover:bg-crimson/5 transition-all group">
                <Instagram size={20} className="group-hover:text-crimson transition-colors" />
                <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 p-4 border border-white/10 hover:border-crimson hover:bg-crimson/5 transition-all group">
                <Music size={20} className="group-hover:text-crimson transition-colors" />
                <span className="text-xs uppercase tracking-widest font-bold">Spotify</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 p-4 border border-white/10 hover:border-crimson hover:bg-crimson/5 transition-all group">
                <Disc size={20} className="group-hover:text-crimson transition-colors" />
                <span className="text-xs uppercase tracking-widest font-bold">Apple Music</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Discography Placeholder */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-crimson" />
            <h3 className="text-sm font-mono uppercase text-white/40 tracking-widest">Known Releases</h3>
          </div>
          <div className="bg-white/5 border border-white/5 p-8 flex items-center justify-between group hover:border-white/20 transition-colors">
             <div>
               <h4 className="text-xl font-bold uppercase tracking-wide">Confidential Audio</h4>
               <p className="text-xs font-mono text-white/40 mt-1">Awaiting Declassification</p>
             </div>
             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
               <Share2 size={16} className="text-white/40" />
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
