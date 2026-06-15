import React, {useEffect, useRef, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import {assets} from "../assets/assets";
import { Show, SignIn, SignInButton, SignUpButton, UserAvatar, UserButton, SignOutButton } from '@clerk/react'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const location = useLocation();

    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setIsScrolled(window.scrollY > 10);
            }
        };

        if (location.pathname !== "/") {
            setIsScrolled(true);
        } else {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);



    return (

            <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
            ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo} alt="Hotel Stay Logo" className={`w-50 ${isScrolled ? "invert" : ""}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        New Launch
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-1">
                    <img src={assets.searchIcon} alt="Search" className={`h-10 w-10 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" />
                    
                    <header>
                        <Show when="signed-out" className="hover:cursor-pointer">

                            <SignInButton mode="modal">
                            <button
                                className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                                isScrolled
                                    ? "text-white bg-black"
                                    : "bg-white text-black"
                                }`}
                            >
                                Login / Sign Up
                            </button>
                            </SignInButton>

                        </Show>

                        <Show when="signed-in">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="My Bookings"
                                        href="/mybookings"
                                        labelIcon="🏨"
                                    />
                                    </UserButton.MenuItems>
                            </UserButton>
                        </Show>
                    </header>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <img src={assets.menuIcon} onClick={()=>setIsMenuOpen(!isMenuOpen)} alt="Menu" className={`h-10 w-10 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" /> 
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt="Close" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" />
                    </button>

                    <header>
                        <Show when="signed-out" className="hover:cursor-pointer">

                            <SignInButton mode="modal">
                            <button
                                className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                                isScrolled
                                    ? "text-white bg-black"
                                    : "bg-white text-black"
                                }`}
                            >
                                Login / Sign Up
                            </button>
                            </SignInButton>

                        </Show>

                        <Show when="signed-in">
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="My Bookings"
                                        href="/mybookings"
                                        labelIcon="🏨"
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </Show>
                    </header>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        New Launch
                    </button>

                    <SignOutButton>
                        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                            Sign Out
                        </button>
                    </SignOutButton>
                </div>
            </nav>
    )
}