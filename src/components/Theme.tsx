'use client'
import React from "react"
import { Sun, Moon } from "lucide-react"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

export default function Theme()
{
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    React.useEffect(() => { 
        if (isDarkMode) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])
    
    return (
     <div className="flex items-center space-x-2">
         <Sun className="h-4 w-4" />
         <Switch
         id="dark-mode"
         checked={isDarkMode}
         onCheckedChange={setIsDarkMode}
         />
         <Moon className="h-4 w-4" />
         <Label htmlFor="dark-mode" className="sr-only">
         Toggle dark mode
         </Label>
     </div>
        
    )
}