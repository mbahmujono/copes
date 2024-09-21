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

const layananItems = [
  { title: "Bedah Anak Umum", href: "#layanan" },
  { title: "Bedah Urologi Anak", href: "#layanan" },
  { title: "Prosedur Minimal Invasif", href: "#layanan" },
  { title: "Bedah Darurat", href: "#layanan" },
  { title: "Bedah Neonatal", href: "#layanan" },
  { title: "Bedah Onkologi Anak", href: "#layanan" },
]

const edukasiItems = [
  { title: "Persiapan Sebelum Operasi", href: "#sumber" },
  { title: "Perawatan Pasca Operasi", href: "#sumber" },
  { title: "Informasi Penyakit", href: "#sumber" },
  { title: "FAQ", href: "#sumber" },
]

const berbagiItems = [
  { title: "Tentang Kami", href: "#tentang" },
  { title: "Tim Kami", href: "#tim" },
  { title: "Testimoni", href: "#testimoni" },
  { title: "Kontak", href: "#kontak" },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Layanan Kami</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {layananItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Edukasi Pasien</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {edukasiItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Berbagi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {berbagiItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"