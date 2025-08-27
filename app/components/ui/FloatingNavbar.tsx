"use client";
import React, { useState, useEffect } from 'react';
import {              cn } from '../../lib/utils' 
import GlassContainer from './GlassContainer';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      
      // If we're at the very top of the page (within 100px), consider home active
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      // Find the current section in view - prioritize sections that are more visible
      let currentSection = '';
      let maxVisibility = 0;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementHeight = rect.bottom - rect.top;
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visibility = Math.max(0, visibleHeight / elementHeight);
          
          // Consider a section active if it's at least 30% visible and near the top
          if (rect.top <= 200 && rect.bottom >= 100 && visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = section;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className={cn(
        "fixed top-2 sm:top-4 left-0 right-0 z-50 transition-all duration-500 px-2 sm:px-6",
        isScrolled ? "top-1 sm:top-2" : "top-3 sm:top-6",
        className
      )}>
        <GlassContainer 
          variant="primary" 
          blur="lg" 
          opacity={isScrolled ? 0.15 : 0.1}
          className={cn(
            "transition-all duration-500 rounded-full animate-navbar-glow",
            isScrolled ? "px-3 py-1.5 sm:px-4 sm:py-2" : "px-4 py-2 sm:px-6 sm:py-3"
          )}
        >
          <nav className="flex items-center justify-between w-full">
            {/* Logo/Brand on the left with scribble */}
            <div className="relative flex-shrink-0">
              <div className="text-base sm:text-lg font-bold font-transformers text-cyan-300 tracking-wide">
                PEC HACKS 3.0
              </div>
              {/* Impressive Scribble SVG */}
              <svg 
                className="absolute -bottom-1.5 left-0 w-full h-5 opacity-90" 
                viewBox="0 0 160 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {/* Main scribble path with more dynamic curves */}
                <path 
                  d="M2 10c4-2.5 8-1 12 0.5s8 2 12-0.5c4-2.5 8 1 12 2.5s8-1.5 12 0c4 1.5 8 3 12 0.5s8-3.5 12-1c4 2.5 8 4 12 1.5s8-4 12-2c4 2 8 5 12 2.5s8-5 12-3c4 2 8 6 12 3s8-6 12-4c4 2 8 7 12 4" 
                  stroke="url(#scribble-main)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="1"
                  className="animate-draw-scribble"
                />
                
                {/* Secondary highlight line for depth */}
                <path 
                  d="M3 13.5c4-1.8 7.5-0.5 11.5 1s7.8 1.5 11.5-1c3.7-2.5 7.5 1.2 11.5 2.8s7.8-1.2 11.5 0.3c3.7 1.5 7.5 2.8 11.5 0.8s7.8-3.2 11.5-0.7c3.7 2.5 7.5 3.7 11.5 1.8s7.8-3.8 11.5-1.7c3.7 2.1 7.5 4.8 11.5 2.8s7.8-4.8 11.5-2.7c3.7 2.1 7.5 5.8 11.5 3.3s7.8-5.5 11.5-3.8c3.7 1.7 7.5 6.5 11.5 4.2" 
                  stroke="url(#scribble-highlight)" 
                  strokeWidth="1.2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.8"
                  className="animate-draw-scribble-delayed"
                />
                
                {/* Sparkle effects */}
                <circle cx="25" cy="10" r="0.8" fill="#06b6d4" opacity="0.8" className="animate-sparkle">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="55" cy="14" r="1" fill="#8b5cf6" opacity="0.7" className="animate-sparkle animation-delay-150">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="95" cy="9" r="0.6" fill="#2dd4bf" opacity="0.9" className="animate-sparkle animation-delay-300">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="135" cy="13" r="0.9" fill="#06b6d4" opacity="0.6" className="animate-sparkle animation-delay-450">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                
                <defs>
                  {/* Main gradient with more vibrant colors */}
                  <linearGradient id="scribble-main" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9">
                      <animate attributeName="stop-color" 
                        values="#06b6d4;#0891b2;#06b6d4" 
                        dur="4s" 
                        repeatCount="indefinite"/>
                    </stop>
                    <stop offset="25%" stopColor="#8b5cf6" stopOpacity="1">
                      <animate attributeName="stop-color" 
                        values="#8b5cf6;#a855f7;#8b5cf6" 
                        dur="4s" 
                        repeatCount="indefinite"/>
                    </stop>
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.95">
                      <animate attributeName="stop-color" 
                        values="#06b6d4;#0284c7;#06b6d4" 
                        dur="4s" 
                        repeatCount="indefinite"/>
                    </stop>
                    <stop offset="75%" stopColor="#2dd4bf" stopOpacity="1">
                      <animate attributeName="stop-color" 
                        values="#2dd4bf;#14b8a6;#2dd4bf" 
                        dur="4s" 
                        repeatCount="indefinite"/>
                    </stop>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8">
                      <animate attributeName="stop-color" 
                        values="#06b6d4;#0891b2;#06b6d4" 
                        dur="4s" 
                        repeatCount="indefinite"/>
                    </stop>
                  </linearGradient>
                  
                  {/* Highlight gradient */}
                  <linearGradient id="scribble-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Desktop navigation items on the right */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative text-sm font-electrolize font-medium transition-all duration-300",
                    "px-3 py-1.5 rounded-lg",
                    "hover:text-cyan-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10",
                    "border border-transparent hover:border-cyan-400/30",
                    "backdrop-blur-sm",
                    activeSection === item.href.replace('#', '') 
                      ? `text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/15 border-cyan-400/40 shadow-lg shadow-cyan-500/20 animate-nav-float animate-delay-nav-${index}` 
                      : `text-gray-200 bg-gradient-to-r from-gray-500/5 to-gray-400/10 border-gray-600/20 shadow-sm shadow-gray-500/10 animate-subtle-pulse animate-delay-nav-${index}`
                  )}
                >
                  <span className={cn(
                    "relative",
                    "before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5",
                    "before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400",
                    "before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
                    activeSection === item.href.replace('#', '') 
                      ? "before:scale-x-100" 
                      : "hover:before:scale-x-100"
                  )}>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-300 transition-colors p-1"
                title="Open navigation menu"
                aria-label="Open navigation menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </GlassContainer>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4">
            <GlassContainer 
              variant="primary" 
              blur="lg" 
              opacity={0.2} 
              className="rounded-2xl sm:rounded-3xl animate-navbar-glow"
            >
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300",
                      "flex items-center space-x-3 font-electrolize font-medium",
                      "relative overflow-hidden backdrop-blur-sm",
                      "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-6",
                      "before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400",
                      "before:transition-all before:duration-300 before:rounded-r-full",
                      "hover:before:w-1 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/25 hover:to-purple-500/20",
                      "border border-transparent hover:border-cyan-400/30",
                      activeSection === item.href.replace('#', '')
                        ? "text-cyan-300 before:w-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/15 border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                        : "text-gray-200 bg-gradient-to-r from-gray-500/10 to-gray-400/15 border-gray-600/20 shadow-sm shadow-gray-500/10"
                    )}
                  >
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </button>
                ))}
              </div>
            </GlassContainer>
          </div>
        </div>
      )}
    </>
  );
}
