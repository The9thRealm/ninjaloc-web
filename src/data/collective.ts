export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  platforms: {
    spotify?: string;
    apple?: string;
    instagram?: string;
  };
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  year: string;
  type: "Single" | "EP" | "Album";
}

export const artists: Artist[] = [
  {
    id: "9loc",
    name: "9loc",
    role: "Core Member / Architect",
    bio: "Driving the foundational sound of the NinjaLOC manifest.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "doc-vore",
    name: "Doc Vore",
    role: "Artist",
    bio: "Delivering surgical precision in every verse and soundscape.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "doomzday-dkay",
    name: "Doomzday Dkay",
    role: "Artist",
    bio: "The soundtrack to the end of days. Raw underground energy.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "fsa",
    name: "FSA: Freakshow Assassins",
    role: "Collective / Group",
    bio: "A precision strike force of underground talent. No witnesses.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "uzi-raks",
    name: "Uzi Raks",
    role: "Artist",
    bio: "High-caliber delivery. Rapid-fire underground truth.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "ebon-black",
    name: "Ebon Black",
    role: "The Exiled King",
    bio: "Reclaiming the underground throne with dark, majestic flow.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  },
  {
    id: "blvccclouds",
    name: "BLVCCCLOUDS",
    role: "Artist",
    bio: "Atmospheric dread and lyrical storms. The weather of the void.",
    platforms: { instagram: "https://www.instagram.com/ninjaloc" }
  }
];

export const releases: Release[] = [
  {
    id: "r1",
    title: "NinjaLOC Records: Vol 1",
    artist: "Collective",
    year: "2026",
    type: "Album",
  }
];