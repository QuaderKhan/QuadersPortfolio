import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const sections = ["home", "about", "projects", "contact"];

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + 120;
            setScrolled(window.scrollY > 10);

            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (!el) return;

                const top = el.offsetTop;
                const bottom = top + el.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div
                        className={`shrink-0 transition-transform duration-300 ${scrolled ? "scale-95" : "scale-100"
                            }`}
                    >
                        <a href="#home" className="text-2xl font-bold text-gray-800">
                            Quader's Portfolio
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {sections.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`relative text-gray-700 transition-colors duration-300
                  hover:text-transparent bg-clip-text
                  hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500
                  ${activeSection === section ? "font-semibold" : ""}`}
                            >
                                {section[0].toUpperCase() + section.slice(1)}
                                {activeSection === section && (
                                    <span className="absolute -bottom-1 left-0 h-1 w-full rounded bg-linear-to-r from-blue-500 to-purple-500" />
                                )}
                            </a>
                        ))}

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="text-gray-700 transition-colors duration-300
                hover:text-transparent bg-clip-text
                hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500"
                        >
                            Resume
                        </a>

                        {/* Hire Me */}
                        <a
                            href="#contact"
                            className="ml-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 px-5 py-2
                font-semibold text-white shadow-md transition-all duration-300
                hover:from-purple-500 hover:to-blue-500"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative z-50 text-gray-700"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                onClick={toggleMenu}
            >
                {/* Slide Menu */}
                <div
                    className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg
            transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mt-16 flex flex-col space-y-3 px-4">
                        {sections.map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={() => setIsOpen(false)}
                                className={`py-3 text-gray-700 transition-colors duration-300
                  hover:text-transparent bg-clip-text
                  hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500
                  ${activeSection === section ? "font-semibold" : ""}`}
                            >
                                {section[0].toUpperCase() + section.slice(1)}
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="py-3 text-gray-700 transition-colors duration-300
                hover:text-transparent bg-clip-text
                hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500"
                        >
                            Resume
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 rounded-full bg-linear-to-r from-blue-500 to-purple-500
                px-4 py-2 text-center font-semibold text-white shadow-md
                transition-all duration-300 hover:from-purple-500 hover:to-blue-500"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}