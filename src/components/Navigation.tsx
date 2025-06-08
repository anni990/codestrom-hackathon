import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Problems', path: '/problems' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'nav-blur py-2 bg-vibe-black/95 backdrop-blur-lg' : 'bg-transparent py-4 md:bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-vibe-green rounded-lg group-hover:animate-pulse">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-mono font-bold text-vibe-green glow-text">
              CodeStorm Elite
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-vibe-green'
                    : 'text-white hover:text-vibe-green'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-vibe-green animate-glow-soft"></div>
                )}
              </Link>
            ))}
            <Link
              to="/enrollment"
              className="bg-vibe-green text-black px-6 py-2 rounded-lg font-medium hover:bg-white transition-all duration-300 hover:scale-105 animate-glow-soft"
            >
              Join Now - FREE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-vibe-green transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-vibe-gray/20 bg-vibe-black/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-vibe-green bg-vibe-gray/20 rounded-lg'
                      : 'text-white hover:text-vibe-green hover:bg-vibe-gray/20 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/enrollment"
                onClick={() => setIsOpen(false)}
                className="bg-vibe-green text-black px-6 py-2 rounded-lg font-medium hover:bg-white transition-all duration-300 mt-4 text-center"
              >
                Join Now - FREE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
