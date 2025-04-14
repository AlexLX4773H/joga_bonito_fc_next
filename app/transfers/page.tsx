import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerCard } from "@/components/player-card"
import { getPlayersByStatus } from "@/data/players"

export const metadata = {
  title: "Transfers | Joga Bonito FC",
  description: "Latest player transfers at Joga Bonito FC",
}

export default function TransfersPage() {
  const currentPlayers = getPlayersByStatus("current")
  const outgoingPlayers = getPlayersByStatus("outgoing")
  const rumoredPlayers = getPlayersByStatus("rumored")

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Player Transfers</h1>
      </div>

      <div className="mb-8">
        <p className="text-muted-foreground">
          Stay updated with the latest player movements and transfers at Joga Bonito FC.
        </p>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="w-full max-w-md mx-auto bg-club-black/50 border border-club-gold">
          <TabsTrigger
            value="current"
            className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white"
          >
            Current Players
          </TabsTrigger>
          <TabsTrigger
            value="outgoing"
            className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white"
          >
            Outgoing
          </TabsTrigger>
          <TabsTrigger
            value="rumored"
            className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white"
          >
            Rumored
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-6">
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
        </TabsContent>

        <TabsContent value="outgoing" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {outgoingPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                name={player.name}
                position={player.position}
                age={player.age}
                nationality={player.nationality}
                previousClub={player.previousClub || ""}
                transferFee={player.transferFee}
                images={player.images}
                newClub={player.newClub}
                number={player.number}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rumored" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {rumoredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                name={player.name}
                position={player.position}
                age={player.age}
                nationality={player.nationality}
                previousClub={player.previousClub || ""}
                transferFee={player.transferFee}
                images={player.images}
                rumored={player.rumored}
                number={player.number}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
