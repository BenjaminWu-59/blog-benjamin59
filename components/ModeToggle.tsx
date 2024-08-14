'use client'
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"

const ModeToggle = () => {
  const {setTheme } = useTheme()

  return (
    <div>
        <DropdownMenu>
           <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-10 px-0">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 translation-all dark:-rotate-90 dark:scale-0"/>
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 translation-all dark:-rotate-0 dark:scale-0"/>
                <span className="sr-only">Toggle Theme</span>
              </Button>
           </DropdownMenuTrigger>
        </DropdownMenu>
    </div>
  )
}

export default ModeToggle