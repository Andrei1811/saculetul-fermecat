"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6 text-purple-700" />
            <span className="sr-only">Meniu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[400px] bg-white">
          <SheetHeader>
            <SheetTitle className="text-left text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
              Saculet Fermecat
            </SheetTitle>
          </SheetHeader>
          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="#"
              onClick={handleLinkClick}
              className="flex items-center py-2 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
            >
              Acasă
            </Link>
            <Link
              href="#products"
              onClick={handleLinkClick}
              className="flex items-center py-2 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
            >
              Produse
            </Link>
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="flex items-center py-2 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
            >
              Despre Noi
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center py-2 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
            >
              Contact
            </Link>
            <div className="mt-4 pt-4 border-t">
              <Link href="#contact" onClick={handleLinkClick}>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 shadow-md transition-all duration-300">
                  Comandă Acum
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
