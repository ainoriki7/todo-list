"use client"
import { Button } from "@heroui/button"
import { useTheme } from "next-themes"
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"

export function ThemeToggle () {

    const{theme, setTheme} = useTheme()

    return (
            <Button 
                className="rounded-full mt-10"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <FaSun className="absolute h-5 w-5 text-yellow-500 transition-all duration-300 scale-100 dark:scale-0" />
            <FaMoon className="absolute h-5 w-5 text-blue-500 transition-all duration-300 scale-0 dark:scale-100" />
            </Button>
    )
}