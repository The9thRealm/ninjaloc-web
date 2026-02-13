export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  year: string;
  type: "Single" | "EP" | "Album";
  link?: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "NinjaLOC",
    role: "Founder / Architect",
    bio: "The phantom behind the manifest. Coordinating the underground from the void.",
  },
  {
    id: "2",
    name: "Shadow Syndicate",
    role: "Vocal Collective",
    bio: "A rotating cast of underground voices delivering raw, unfiltered truth.",
  },
  {
    id: "3",
    name: "Void Producer",
    role: "Sound Designer",
    bio: "Crafting the atmospheric dread that defines the NinjaLOC sound.",
  }
];

export const releases: Release[] = [
  {
    id: "r1",
    title: "The Underground Manifest",
    artist: "NinjaLOC",
    year: "2026",
    type: "Album",
  },
  {
    id: "r2",
    title: "Shadow Work",
    artist: "Shadow Syndicate",
    year: "2025",
    type: "EP",
  },
  {
    id: "r3",
    title: "Ghost in the Machine",
    artist: "Void Producer",
    year: "2025",
    type: "Single",
  }
];
