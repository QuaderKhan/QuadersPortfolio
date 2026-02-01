import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    }, [isDark])

    return (
        <button
            onClick={() => setIsDark((prev) => !prev)}
            className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg
                 bg-gray-900 text-white
                 dark:bg-white dark:text-black"
        >
            {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
    )
}
