
import React from 'react';
import { Zap, Mail, Twitter, Github, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-vibe-black border-t border-vibe-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-vibe-green rounded-lg">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-mono font-bold text-vibe-green glow-text">
                CodeStorm Elite
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Storm the coding world. Join the ultimate 6-hour hackathon experience - completely FREE.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-vibe-green transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-vibe-green transition-colors">
                About
              </Link>
              <Link to="/timeline" className="block text-gray-400 hover:text-vibe-green transition-colors">
                Timeline
              </Link>
              <Link to="/problems" className="block text-gray-400 hover:text-vibe-green transition-colors">
                Problems
              </Link>
              <Link to="/enrollment" className="block text-gray-400 hover:text-vibe-green transition-colors">
                Free Registration
              </Link>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Event Details</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📅 March 15, 2025</p>
              <p>⏰ 10:00 AM - 4:00 PM</p>
              <p>📍 TechHub Silicon Valley</p>
              <p>💰 100% FREE Entry</p>
              <p>🏆 $5,000 Prize Pool</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@codestormelite.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-vibe-green transition-colors"
              >
                <Mail size={16} />
                <span>hello@codestormelite.com</span>
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-vibe-green transition-colors hover:scale-110 transform">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-vibe-green transition-colors hover:scale-110 transform">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-vibe-green transition-colors hover:scale-110 transform">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vibe-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CodeStorm Elite. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Powered by <span className="text-vibe-green font-mono">{'<storm/developers>'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
