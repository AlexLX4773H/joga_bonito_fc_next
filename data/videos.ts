export interface VideoData {
  id: string
  title: string
  duration: string
  views: string
  date: string
  youtubeId: string
  thumbnail?: string
  category: "highlights" | "profiles" | "promotional"
  playerImage?: string
  playerName?: string
  playerPosition?: string
  aspectRatio?: string // Format: "16:9", "9:16", "4:3", etc.
}

export const videos: VideoData[] = [
  // Highlights Videos
  {
    id: "hl-1",
    title: "Manager Faris Training Rituals",
    duration: "0:28",
    views: "124K",
    date: "3 days ago",
    youtubeId: "1cvWc29_T_4", // Roberto Carlos free kick
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-2",
    title: "Manager Faris Football Skills",
    duration: "0:21",
    views: "87K",
    date: "1 week ago",
    youtubeId: "fByNs_PGfzM", // Brazil vs France
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-10",
    title: "Joga Bonito Football Match Highlights 03",
    duration: "7:19",
    views: "8K",
    date: "1 week ago",
    youtubeId: "1ecdeS4rMbs", // Brazil vs France 2006
    category: "highlights",
    aspectRatio: "16:9",
  },
  {
    id: "hl-11",
    title: "Joga Bonito Football Match Highlights 02",
    duration: "7:40",
    views: "7K",
    date: "1 week ago",
    youtubeId: "SJblfkE1A-4", // Brazil vs France 2006
    category: "highlights",
    aspectRatio: "16:9",
  },
  {
    id: "hl-12",
    title: "Joga Bonito Football Match Highlights 01",
    duration: "10:10",
    views: "6K",
    date: "1 week ago",
    youtubeId: "EexGQ76ga9Y", // Brazil vs France 2006
    category: "highlights",
    aspectRatio: "16:9",
  },
  {
    id: "hl-3",
    title: "A Day In The Life Of A Football Manager",
    duration: "0:48",
    views: "203K",
    date: "2 weeks ago",
    youtubeId: "rvwDMmRREpo", // Ronaldinho skills
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-4",
    title: "Joga Bonito Football News Live Match Updates",
    duration: "1:00",
    views: "92K",
    date: "3 weeks ago",
    youtubeId: "ngntIX1QQ_g", // Last minute goals
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-5",
    title: "G.O.A.T Manager Faris",
    duration: "0:28",
    views: "56K",
    date: "1 month ago",
    youtubeId: "q18kYsW5ShE", // Goalkeeper saves
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-6",
    title: "Manager Faris Training For Goku",
    duration: "0:15",
    views: "43K",
    date: "1 month ago",
    youtubeId: "Jb9BkhmNksk", // Young talents
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-7",
    title: "Manager Faris Comeback - Haters Will Say",
    duration: "0:26",
    views: "112K",
    date: "2 months ago",
    youtubeId: "P0XvlX0WZQc", // Match highlights
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-8",
    title: "Manager Faris Giving Antony Vibes - Aura",
    duration: "0:17",
    views: "78K",
    date: "2 months ago",
    youtubeId: "Ay6giyfPq1Q", // Hat-trick compilation
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-9",
    title: "Manager Faris vs Zlatan Ibrahimović",
    duration: "0:33",
    views: "65K",
    date: "3 months ago",
    youtubeId: "Rhp-1hu6g-o", // International match
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-20",
    title: "Farewell Manager Faris",
    duration: "0:29",
    views: "12K",
    date: "1 months ago",
    youtubeId: "zdjzeVhG3ts", 
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-21",
    title: "Ryan Jersey No 6, A Star In The Making",
    duration: "0:19",
    views: "11K",
    date: "1 months ago",
    youtubeId: "Ws0t4FrZC0o", 
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-22",
    title: "Joga Bonito FC Jersey Launch",
    duration: "0:29",
    views: "11K",
    date: "1 months ago",
    youtubeId: "llx1j_iiT-4", 
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-23",
    title: "Jojo Jersey No 17 Football Wizardry",
    duration: "1:01",
    views: "6K",
    date: "1 months ago",
    youtubeId: "2hC-QPnXXE4", 
    category: "highlights",
    aspectRatio: "9:16",
  },
  {
    id: "hl-24",
    title: "Unleash The Beauty: Joga Bonito FC Promo",
    duration: "0:50",
    views: "1K",
    date: "1 months ago",
    youtubeId: "hYp8zYGKHgo", 
    category: "highlights",
    aspectRatio: "9:16",
  },

  // Player Profile Videos
  {
    id: "prof-1",
    title: "Faris: The Mastermind",
    duration: "4:30",
    views: "89K",
    date: "2 weeks ago",
    youtubeId: "YePFGhCC7ro",
    category: "profiles",
    playerName: "Faris",
    playerPosition: "Manager",
    playerImage: "https://lxsoft.site/Joga_photos/Faris_Thatu.jpg",
    aspectRatio: "16:9",
  },
  {
    id: "prof-2",
    title: "Siva Sankaran: The Striker",
    duration: "3:45",
    views: "76K",
    date: "3 weeks ago",
    youtubeId: "vl5boGDZUGE",
    category: "profiles",
    playerName: "Siva Sankaran",
    playerPosition: "Forward",
    playerImage: "https://lxsoft.site/Joga_photos/siva_joga.jpg",
    aspectRatio: "16:9",
  },
  {
    id: "prof-3",
    title: "Jojo Joyel: Midfield Maestro",
    duration: "5:12",
    views: "68K",
    date: "1 month ago",
    youtubeId: "Av6w8xCIhXY",
    category: "profiles",
    playerName: "Jojo Joyel",
    playerPosition: "Midfielder",
    playerImage: "https://lxsoft.site/Joga_photos/jojo_joga.jpg",
    aspectRatio: "16:9",
  },
  // Example portrait video
  {
    id: "prof-4",
    title: "Alex: Goalkeeper Spotlight",
    duration: "2:30",
    views: "45K",
    date: "1 month ago",
    youtubeId: "yGqfo8nfJnM",
    category: "profiles",
    playerName: "Alex",
    playerPosition: "Goalkeeper",
    playerImage: "https://lxsoft.site/Joga_photos/Alex_Joga.jpg",
    aspectRatio: "9:16", // Portrait video
  },

  // Promotional Videos
  {
    id: "promo-1",
    title: "New Season Kit Launch",
    duration: "2:30",
    views: "112K",
    date: "1 month ago",
    youtubeId: "llx1j_iiT-4", // Nike football ad
    category: "promotional",
    aspectRatio: "9:16",
  },
  {
    id: "promo-2",
    title: "Training Facilities Tour",
    duration: "6:15",
    views: "58K",
    date: "2 months ago",
    youtubeId: "YePFGhCC7ro", // Training facility tour
    category: "promotional",
    aspectRatio: "16:9",
  },
  {
    id: "promo-3",
    title: "Community Outreach Program",
    duration: "4:45",
    views: "43K",
    date: "2 months ago",
    youtubeId: "3f5nIq9sPgc", // Community outreach
    category: "promotional",
    aspectRatio: "16:9",
  },
  {
    id: "promo-4",
    title: "Season Ticket Announcement",
    duration: "1:30",
    views: "87K",
    date: "3 months ago",
    youtubeId: "QH2-TGUlwu4", // Season ticket promo
    category: "promotional",
    aspectRatio: "4:3", // Different aspect ratio
  },
]

// Helper function to get videos by category
export function getVideosByCategory(category: VideoData["category"]) {
  return videos.filter((video) => video.category === category)
}

// Helper function to get a video by ID
export function getVideoById(id: string) {
  return videos.find((video) => video.id === id)
}
