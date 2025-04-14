export interface PlayerData {
  id: string
  name: string
  position: string
  age: number | string
  nationality: string
  previousClub?: string
  transferFee: string
  images: string[]
  number?: number | string
  newClub?: string
  rumored?: boolean
  status: "current" | "outgoing" | "rumored"
}

export const players: PlayerData[] = [
  // Current Players
  {
    id: "siva",
    name: "Siva Sankaran",
    position: "Forward",
    age: 26,
    nationality: "India",
    transferFee: "15 Chaya",
    images: ["https://lxsoft.site/Joga_photos/siva_joga.jpg", "https://lxsoft.site/Joga_photos/siva_joga_2.jpg"],
    number: 19,
    status: "current",
  },
  {
    id: "jojo",
    name: "Jojo Joyel",
    position: "Midfielder",
    age: 26,
    nationality: "India",
    transferFee: "17 Chaya",
    images: ["https://lxsoft.site/Joga_photos/jojo_joga.jpg", "https://lxsoft.site/Joga_photos/jojo_joga_2.jpg"],
    number: 17,
    status: "current",
  },
  {
    id: "alex",
    name: "Alex",
    position: "Goalkeeper",
    age: 27,
    nationality: "India",
    transferFee: "8 Lime",
    images: ["https://lxsoft.site/Joga_photos/Alex_Joga.jpg"],
    number: 1,
    status: "current",
  },
  {
    id: "ryan",
    name: "Ryan",
    position: "Forward",
    age: "?",
    nationality: "India",
    transferFee: "Kure",
    images: ["https://lxsoft.site/Joga_photos/Ryan_joga.jpg"],
    number: 6,
    status: "current",
  },
  {
    id: "vinayak",
    name: "Vinayak",
    position: "Forward",
    age: "?",
    nationality: "India",
    transferFee: "15 Chaya no-sugar",
    images: ["https://lxsoft.site/Joga_photos/joga_vinayak.jpg"],
    number: 7,
    status: "current",
  },

    // Outgoing Players  {
  {
    id: "shanks",
    name: "Shanks",
    position: "Defender",
    age: 26,
    nationality: "Saudi",
    previousClub: "Joga Bonito FC",
    transferFee: "15 Chaya",
    images: ["https://lxsoft.site/Joga_photos/Shanks_joga.jpg"],
    newClub: "Saudi FC",
    number: 8,
    status: "outgoing",
  },
  {
    id: "faris",
    name: "Faris",
    position: "Manager",
    age: 26,
    nationality: "Germany",
    previousClub: "Joga Bonito FC",
    transferFee: "50 Yoga",
    images: ["https://lxsoft.site/Joga_photos/Faris_Thatu.jpg"],
    newClub: "German Frankfurt",
    number: 14,
    status: "outgoing",
  },

  // Rumored Players
  {
    id: "lionel",
    name: "Lionel Mendes",
    position: "Winger",
    age: 22,
    nationality: "Portugal",
    previousClub: "Sporting CP",
    transferFee: "€20M (Rumored)",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rumored: true,
    number: 7,
    status: "rumored",
  },
  {
    id: "kylian",
    name: "Kylian Mbemba",
    position: "Forward",
    age: 21,
    nationality: "France",
    previousClub: "Monaco",
    transferFee: "€25M (Rumored)",
    images: ["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"],
    rumored: true,
    number: 10,
    status: "rumored",
  },
]

// Helper function to get players by status
export function getPlayersByStatus(status: PlayerData["status"]) {
  return players.filter((player) => player.status === status)
}

// Helper function to get a player by ID
export function getPlayerById(id: string) {
  return players.find((player) => player.id === id)
}
