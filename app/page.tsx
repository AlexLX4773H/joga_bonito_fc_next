import Link from "next/link"
import Image from "next/image"
import { Play, ChevronRight, Trophy, Calendar, Users, LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayerCard } from "@/components/player-card"
import { VideoCard } from "@/components/video-card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { PlayerRegistrationDialog } from "@/components/player-registration-dialog"
import { Toaster } from "@/components/ui/toaster"
import { ScrollButtons } from "@/components/scroll-buttons"
import { ThemeToggle } from "@/components/theme-toggle"
import { PromotionalVideo } from "@/components/promotional-video"
import { JerseyShowcase } from "@/components/jersey-showcase"
import { getVideosByCategory } from "@/data/videos"

// Inside your Home component:
export default function Home() {
  // Get the first 3 highlight videos for the featured section
  const featuredHighlights = getVideosByCategory("highlights").slice(0, 3)

  // Get the first 2 promotional videos for the promotional section
  const featuredPromotional = getVideosByCategory("promotional").slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-club-gold bg-club-black text-white backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joga%20logo.jpg-O2aQJS6gJJpZGwMCdnJxGJ3OjwNlzT.jpeg"
              alt="Joga Bonito FC Logo"
              width={40}
              height={48}
              className="h-10 w-auto sm:h-12"
            />
            <span className="text-lg font-bold text-white sm:text-xl">Joga Bonito FC</span>
          </Link>
          <MainNav className="mx-6 hidden md:flex" />
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            {/* Sign In Button - Icon on mobile, text on desktop */}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-club-gold text-white hover:bg-club-gold hover:text-black sm:hidden"
            >
              <LogIn className="h-4 w-4" />
              <span className="sr-only">Sign In</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden border-club-gold text-white hover:bg-club-gold hover:text-black sm:inline-flex"
            >
              Sign In
            </Button>

            {/* Join Club Button/Dialog - Icon on mobile, text on desktop */}
            <PlayerRegistrationDialog />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/70" />
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="https://lxsoft.site/Joga_photos/background_stadium.jpg?height=1080&width=1920"
              alt="Joga Bonito FC Stadium"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              THE BEAUTIFUL GAME
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 sm:text-xl">
              Experience the art of football with Joga Bonito FC. Watch our highlights, follow player transfers, and
              join our community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 bg-club-red hover:bg-club-red/90 text-white" asChild>
                <Link href="/media/highlights">
                  <Play className="h-4 w-4" />
                  Watch Highlights
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-club-gold bg-black/50 text-white backdrop-blur-sm hover:bg-club-gold hover:text-black"
              >
                Club Information
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest Highlights</h2>
              <p className="mt-2 text-muted-foreground">
                Watch the most recent matches and best plays from Joga Bonito FC
              </p>
            </div>
            <Button variant="outline" className="gap-2 border-club-gold hover:bg-club-gold hover:text-black" asChild>
              <Link href="/media/highlights">
                View All Highlights
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          {/* Inside the Home component where we render the featured videos */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHighlights.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                duration={video.duration}
                views={video.views}
                date={video.date}
                youtubeId={video.youtubeId}
                thumbnail={video.thumbnail}
                aspectRatio={video.aspectRatio}
              />
            ))}
          </div>
        </section>

        <section className="bg-club-black py-12 md:py-16 lg:py-20 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Player Transfers</h2>
              <p className="mt-2 max-w-[700px] text-white/70">
                Stay updated with the latest player movements and transfers at Joga Bonito FC
              </p>
            </div>
            <Tabs defaultValue="incoming" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="bg-club-black/50 border border-club-gold">
                  <TabsTrigger
                    value="incoming"
                    className="data-[state=active]:bg-club-red data-[state=active]:text-white"
                  >
                    Current players
                  </TabsTrigger>
                  <TabsTrigger
                    value="outgoing"
                    className="data-[state=active]:bg-club-red data-[state=active]:text-white"
                  >
                    Outgoing
                  </TabsTrigger>
                  <TabsTrigger
                    value="rumored"
                    className="data-[state=active]:bg-club-red data-[state=active]:text-white"
                  >
                    Rumored
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="incoming" className="mt-6">
                <div className="relative">
                  <div
                    id="incoming-scroll"
                    className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                  >
                    <div className="flex gap-6">
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Siva Sankaran"
                          position="Forward"
                          age={26}
                          nationality="India"
                          transferFee="15 Chaya"
                          images={[
                            "https://lxsoft.site/Joga_photos/siva_joga.jpg",
                            "https://lxsoft.site/Joga_photos/siva_joga_2.jpg",
                          ]}
                          number={19}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Jojo Joyel"
                          position="Midfielder"
                          age={26}
                          nationality="India"
                          transferFee="12 Chaya"
                          images={[
                            "https://lxsoft.site/Joga_photos/jojo_joga.jpg",
                            "https://lxsoft.site/Joga_photos/jojo_joga_2.jpg",
                          ]}
                          number={17}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Alex"
                          position="Goalkeeper"
                          age={27}
                          nationality="India"
                          transferFee="8 Lime"
                          images={["https://lxsoft.site/Joga_photos/Alex_Joga.jpg"]}
                          number={1}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Ryan"
                          position="Forward"
                          age={"?"}
                          nationality="India"
                          transferFee="Kure"
                          images={["https://lxsoft.site/Joga_photos/Ryan_joga.jpg"]}
                          number={6}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Shanks"
                          position="Defender"
                          age={26}
                          nationality="Saudi"
                          transferFee="5 Chaya"
                          images={["https://lxsoft.site/Joga_photos/Shanks_joga.jpg"]}
                          number={8}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Faris"
                          position="Manager"
                          age={26}
                          nationality="Germany"
                          transferFee="50 Yoga"
                          images={["https://lxsoft.site/Joga_photos/Faris_Thatu.jpg"]}
                          number={14}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Vinayak"
                          position="Forward"
                          age={"?"}
                          nationality="India"
                          transferFee="15 Chaya no-sugar"
                          images={["https://lxsoft.site/Joga_photos/joga_vinayak.jpg"]}
                          number={7}
                        />
                      </div>
                    </div>
                  </div>
                  <ScrollButtons scrollContainerId="incoming-scroll" />
                </div>
              </TabsContent>
              <TabsContent value="outgoing" className="mt-6">
                <div className="relative">
                  <div
                    id="outgoing-scroll"
                    className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                  >
                    <div className="flex gap-6">
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Roberto Carlos"
                          position="Left Back"
                          age={32}
                          nationality="Brazil"
                          previousClub="Joga Bonito FC"
                          transferFee="€7M"
                          images={["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"]}
                          newClub="Madrid Stars"
                          number={3}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="David Johnson"
                          position="Striker"
                          age={29}
                          nationality="England"
                          previousClub="Joga Bonito FC"
                          transferFee="€10M"
                          images={["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"]}
                          newClub="London United"
                          number={11}
                        />
                      </div>
                    </div>
                  </div>
                  <ScrollButtons scrollContainerId="outgoing-scroll" />
                </div>
              </TabsContent>
              <TabsContent value="rumored" className="mt-6">
                <div className="relative">
                  <div
                    id="rumored-scroll"
                    className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                  >
                    <div className="flex gap-6">
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Lionel Mendes"
                          position="Winger"
                          age={22}
                          nationality="Portugal"
                          previousClub="Sporting CP"
                          transferFee="€20M (Rumored)"
                          images={["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"]}
                          rumored
                          number={7}
                        />
                      </div>
                      <div className="min-w-[280px] snap-start">
                        <PlayerCard
                          name="Kylian Mbemba"
                          position="Forward"
                          age={21}
                          nationality="France"
                          previousClub="Monaco"
                          transferFee="€25M (Rumored)"
                          images={["/placeholder.svg?height=400&width=300", "/placeholder.svg?height=400&width=300"]}
                          rumored
                          number={10}
                        />
                      </div>
                    </div>
                  </div>
                  <ScrollButtons scrollContainerId="rumored-scroll" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Jersey Kit Showcase Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Club Kit Showcase</h2>
            <p className="mt-2 max-w-[700px] text-muted-foreground">
              Preview our official Joga Bonito FC jersey designs for the 2024/25 season
            </p>
            <div className="mt-2 inline-block px-4 py-1 bg-club-red/10 dark:bg-club-red/20 rounded-full text-sm">
              <span className="font-medium text-club-red">Note:</span> Currently only our home kit is available, with
              away and alternate kits coming soon
            </div>
          </div>
          <div className="mt-8">
            <JerseyShowcase />
          </div>
        </section>

        {/* Promotional Videos Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Promotional Videos</h2>
            <p className="mt-2 max-w-[700px] text-muted-foreground">
              Exclusive content showcasing our club culture, community initiatives, and special events
            </p>
          </div>
          {/* And update the PromotionalVideo components */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredPromotional.map((video) => (
              <PromotionalVideo
                key={video.id}
                title={video.title}
                description={video.title}
                youtubeId={video.youtubeId}
                thumbnail={video.thumbnail}
                aspectRatio={video.aspectRatio}
              />
            ))}
          </div>
        </section>

        <section className="bg-club-red/10 py-12 md:py-16 lg:py-20 dark:bg-club-red/20">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Club Statistics</h2>
              <p className="mt-2 max-w-[700px] text-muted-foreground">
                Our achievements and milestones throughout the club's history
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center border-club-gold">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Trophy className="h-12 w-12 text-club-gold" />
                  </div>
                  <h3 className="mt-4 text-4xl font-bold">0?</h3>
                  <p className="mt-2 text-muted-foreground">League Titles</p>
                </CardContent>
              </Card>
              <Card className="text-center border-club-gold">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Trophy className="h-12 w-12 text-club-gold" />
                  </div>
                  <h3 className="mt-4 text-4xl font-bold">0?</h3>
                  <p className="mt-2 text-muted-foreground">Cup Championships</p>
                </CardContent>
              </Card>
              <Card className="text-center border-club-gold">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Calendar className="h-12 w-12 text-club-red" />
                  </div>
                  <h3 className="mt-4 text-4xl font-bold">2024</h3>
                  <p className="mt-2 text-muted-foreground">Year Founded</p>
                </CardContent>
              </Card>
              <Card className="text-center border-club-gold">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Users className="h-12 w-12 text-club-red" />
                  </div>
                  <h3 className="mt-4 text-4xl font-bold">16+</h3>
                  <p className="mt-2 text-muted-foreground">Club Members</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
