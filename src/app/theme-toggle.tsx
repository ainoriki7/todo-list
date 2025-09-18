"use client"
import { Button } from "@heroui/button"
import { useTheme } from "next-themes"
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"

export function ThemeToggle () {

    const{theme, setTheme} = useTheme()

    return (
            <Button 
                className="rounded-full"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <FaSun className=""></FaSun>
            <FaMoon></FaMoon>
        </Button>
    )
}