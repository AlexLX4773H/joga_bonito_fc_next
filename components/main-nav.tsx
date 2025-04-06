"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  return (
    <NavigationMenu className={cn("hidden md:flex", className)} {...props}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white hover:bg-club-red hover:text-white")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:bg-club-red hover:text-white">Team</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-club-black border border-club-gold">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-club-red/50 to-club-red p-6 no-underline outline-none focus:shadow-md"
                    href="/team/squad"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">First Team Squad</div>
                    <p className="text-sm leading-tight text-white/90">
                      Meet our professional players and coaching staff
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/team/players" title="Players">
                Player profiles, statistics, and career highlights
              </ListItem>
              <ListItem href="/team/staff" title="Staff">
                Coaching staff, medical team, and management
              </ListItem>
              <ListItem href="/team/academy" title="Academy">
                Youth development and future stars
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:bg-club-red hover:text-white">Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-club-black border border-club-gold">
              <ListItem href="/media/highlights" title="Match Highlights">
                Watch the best moments from our recent matches
              </ListItem>
              <ListItem href="/media/interviews" title="Interviews">
                Exclusive interviews with players and staff
              </ListItem>
              <ListItem href="/media/photos" title="Photo Gallery">
                Official match and training photos
              </ListItem>
              <ListItem href="/media/promotional" title="Promotional Videos">
                Club announcements and special features
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:bg-club-red hover:text-white">
            Transfers
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-club-black border border-club-gold">
              <ListItem href="/transfers/incoming" title="Incoming Transfers">
                New signings and player acquisitions
              </ListItem>
              <ListItem href="/transfers/outgoing" title="Outgoing Transfers">
                Player departures and loan deals
              </ListItem>
              <ListItem href="/transfers/rumors" title="Transfer Rumors">
                Latest transfer news and speculation
              </ListItem>
              <ListItem href="/transfers/history" title="Transfer History">
                Archive of past transfer windows
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white hover:bg-club-red hover:text-white")}
            >
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/fixtures" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-white hover:bg-club-red hover:text-white")}
            >
              Fixtures
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-club-red hover:text-white focus:bg-club-red focus:text-white text-white",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

