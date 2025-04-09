"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ScrollButtonsProps {
  scrollContainerId: string
  scrollAmount?: number
}

export function ScrollButtons({ scrollContainerId, scrollAmount = 600 }: ScrollButtonsProps) {
  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById(scrollContainerId)
    if (container) {
      const scrollPosition =
        direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden md:flex">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-club-gold bg-black/80 text-white backdrop-blur-sm hover:bg-club-gold hover:text-black dark:bg-black/40"
          onClick={() => handleScroll("left")}
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:flex">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-club-gold bg-black/80 text-white backdrop-blur-sm hover:bg-club-gold hover:text-black dark:bg-black/40"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </>
  )
}
