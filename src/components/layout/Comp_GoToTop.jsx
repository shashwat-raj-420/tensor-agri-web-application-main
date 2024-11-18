import React, { useEffect, useState } from 'react'
import { TiArrowUpThick } from 'react-icons/ti'

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <button 
        onClick={scrollToTop} 
        className={`
        fixed 
        transition 
        duration-100
        border-0 outline-0 
        ease-in-out 
        bottom-6 md:bottom-10
        right-6 md:right-10 
        sm:text-lg text-xl
        hover:-translate-y-2
        p-2 
        text-green-600  md:text-white
        md:bg-green-600 
        rounded-full 
        z-50
        ${isVisible?"opacity-100":"opacity-0"}`}>
            <TiArrowUpThick />
        </button>
    )
}
