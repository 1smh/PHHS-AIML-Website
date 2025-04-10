"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrainCircuit, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  
  { path: "/about", name: "About" },
  { path: "/officers", name: "Officers" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
]

type NavItem = {
  path: string;
  name: string;
};

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.5 }}
      className="fixed top-4 inset-x-0 max-w-5xl mx-auto z-50 rounded-full border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between h-14 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center space-x-2 group">
            <BrainCircuit className="h-7 w-7 text-blue-600 group-hover:text-purple-600 transition-colors" />
            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
              PHHS AI/ML
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center justify-center flex-grow space-x-1 lg:space-x-2">
          {navItems.map((item: NavItem) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-blue-700 hover:bg-blue-500/10",
                  pathname === item.path
                    ? "text-blue-700 font-semibold bg-blue-500/10"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://discord.gg/3eYaetbPUb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-5 py-1.5 shadow-md hover:shadow-lg transition-all duration-300"
              >
              Join Club  
              </Button>
            </a>
          </motion.div>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-white/90 backdrop-blur-lg border-l border-white/30">
              <nav className="flex flex-col space-y-4 pt-10">
                {navItems.map((item: NavItem) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-3 py-2 text-base font-medium transition-colors hover:text-blue-700 hover:bg-blue-500/10 rounded-md",
                      pathname === item.path
                        ? "text-blue-700 font-semibold bg-blue-500/10"
                        : "text-gray-700"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://discord.gg/3eYaetbPUb"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  >
                  Join Club
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}