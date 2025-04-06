"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface JerseyProps {
  name: string
  description: string
  price?: string // Make price optional
  images: string[]
  type: "home" | "away" | "third" | "goalkeeper"
  season: string
}

function JerseyCard({ name, description, price, images, type, season }: JerseyProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card className="overflow-hidden border-club-gold">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`${name} - ${type} kit`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Image navigation buttons - only show if multiple images */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white border-club-gold hover:bg-club-gold hover:text-black z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white border-club-gold hover:bg-club-gold hover:text-black z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>

            {/* Image indicator dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${index === currentImageIndex ? "bg-club-gold" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
        {type !== "home" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
            <div className="bg-club-red px-3 py-1 rounded-md text-white font-bold transform -rotate-12 text-lg">
              Coming Soon
            </div>
          </div>
        )}
        <div className="absolute top-2 left-2 bg-club-red text-white text-xs px-2 py-1 rounded-md">{season}</div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">
          {type !== "home" && <div className="text-xs text-muted-foreground italic">Coming soon</div>}
        </div>
      </CardContent>
    </Card>
  )
}

export function JerseyShowcase() {
  return (
    <div className="w-full">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="w-full max-w-md mx-auto bg-club-black/50 border border-club-gold">
          <TabsTrigger value="home" className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white">
            Home Kit
          </TabsTrigger>
          <TabsTrigger value="away" className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white">
            Away Kit
          </TabsTrigger>
          <TabsTrigger value="third" className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white">
            Third Kit
          </TabsTrigger>
          <TabsTrigger
            value="goalkeeper"
            className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white"
          >
            Goalkeeper
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <JerseyCard
              name="Home Kit 2024/25"
              description="Official Joga Bonito FC home jersey featuring our iconic red and white colors"
              price="$89.99"
              images={[
                "https://lxsoft.site/Joga_photos/Joga_shirt.jpg"
              ]}
              type="home"
              season="2024/25"
            />
            <JerseyCard
              name="Home Kit Long Sleeve"
              description="Long sleeve version of our home jersey for cooler match days"
              price="$99.99"
              images={[
                "https://lxsoft.site/Joga_photos/Joga_shirt.jpg"
              ]}
              type="home"
              season="2024/25"
            />
            <JerseyCard
              name="Home Kit Authentic"
              description="Player-spec authentic version of our home jersey as worn on the pitch"
              price="$129.99"
              images={["https://lxsoft.site/Joga_photos/Joga_shirt.jpg"]}
              type="home"
              season="2024/25"
            />
          </div>
        </TabsContent>

        <TabsContent value="away" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <JerseyCard
              name="Away Kit 2024/25"
              description="Official Joga Bonito FC away jersey in striking black and gold"
              price="$89.99"
              images={[
                "https://lxsoft.site/Joga_photos/away_kit_front.jpg",
                "https://lxsoft.site/Joga_photos/away_kit_back.jpg",
              ]}
              type="away"
              season="2024/25"
            />
            <JerseyCard
              name="Away Kit Long Sleeve"
              description="Long sleeve version of our away jersey for cooler match days"
              price="$99.99"
              images={[
                "https://lxsoft.site/Joga_photos/away_kit_long_front.jpg",
                "https://lxsoft.site/Joga_photos/away_kit_long_back.jpg",
              ]}
              type="away"
              season="2024/25"
            />
            <JerseyCard
              name="Away Kit Authentic"
              description="Player-spec authentic version of our away jersey as worn on the pitch"
              price="$129.99"
              images={["https://lxsoft.site/Joga_photos/away_kit_authentic.jpg"]}
              type="away"
              season="2024/25"
            />
          </div>
        </TabsContent>

        <TabsContent value="third" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <JerseyCard
              name="Third Kit 2024/25"
              description="Official Joga Bonito FC third jersey in unique gold and black design"
              price="$89.99"
              images={[
                "https://lxsoft.site/Joga_photos/third_kit_front.jpg",
                "https://lxsoft.site/Joga_photos/third_kit_back.jpg",
              ]}
              type="third"
              season="2024/25"
            />
            <JerseyCard
              name="Third Kit Long Sleeve"
              description="Long sleeve version of our third jersey for cooler match days"
              price="$99.99"
              images={[
                "https://lxsoft.site/Joga_photos/third_kit_long_front.jpg",
                "https://lxsoft.site/Joga_photos/third_kit_long_back.jpg",
              ]}
              type="third"
              season="2024/25"
            />
            <JerseyCard
              name="Third Kit Authentic"
              description="Player-spec authentic version of our third jersey as worn on the pitch"
              price="$129.99"
              images={["https://lxsoft.site/Joga_photos/third_kit_authentic.jpg"]}
              type="third"
              season="2024/25"
            />
          </div>
        </TabsContent>

        <TabsContent value="goalkeeper" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <JerseyCard
              name="Goalkeeper Kit 2024/25"
              description="Official Joga Bonito FC goalkeeper jersey in vibrant design"
              price="$89.99"
              images={[
                "https://lxsoft.site/Joga_photos/goalkeeper_kit_front.jpg",
                "https://lxsoft.site/Joga_photos/goalkeeper_kit_back.jpg",
              ]}
              type="goalkeeper"
              season="2024/25"
            />
            <JerseyCard
              name="Goalkeeper Kit Long Sleeve"
              description="Long sleeve version of our goalkeeper jersey"
              price="$99.99"
              images={[
                "https://lxsoft.site/Joga_photos/goalkeeper_kit_long_front.jpg",
                "https://lxsoft.site/Joga_photos/goalkeeper_kit_long_back.jpg",
              ]}
              type="goalkeeper"
              season="2024/25"
            />
            <JerseyCard
              name="Goalkeeper Kit Authentic"
              description="Player-spec authentic version of our goalkeeper jersey as worn on the pitch"
              price="$129.99"
              images={["https://lxsoft.site/Joga_photos/goalkeeper_kit_authentic.jpg"]}
              type="goalkeeper"
              season="2024/25"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

