import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlayerCard } from "@/components/player-card"
import { players } from "@/data/players"

export const metadata = {
  title: "Players | Joga Bonito FC",
  description: "Meet the players of Joga Bonito FC",
}

export default function PlayersPage() {
  // Get all current players
  const currentPlayers = players.filter((player) => player.status === "current")

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Players</h1>
      </div>

      <div className="mb-8">
        <p className="text-muted-foreground">
          Meet the talented players who make up Joga Bonito FC. Our squad combines experience, youth, and skill to play
          beautiful football.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            position={player.position}
            age={player.age}
            nationality={player.nationality}
            previousClub={player.previousClub || ""}
            transferFee={player.transferFee}
            images={player.images}
            number={player.number}
          />
        ))}
      </div>
    </div>
  )
}
