import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/projects", label: "Projects"},
    {to: "/blog", label: "Blog"},
    {to: "/contact", label: "Contact"},
];

export default function Navbar() {
    const { pathname } = useLocation(); // useLocation() lets you highlight the active link
    const [open, setOpen] = useState(false); // useState toggles the mobile menu

    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-gray-950/80 border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link to="/" className="text-lg font-bold tracking-tight">
                    Ryan Sinha
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6">
                    {links.map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`text-sm transition-colors ${pathname === l.to ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger menu for mobile */}
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>

            {/* Menu for Mobile */}
            {open && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
                    {links.map((l) => (
                        <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                            className="text-sm text-gray-300"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}