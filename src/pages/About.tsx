
import React, { useEffect } from 'react';
import { Code2, Users, Trophy, Zap, Target, Star, Award, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = 'About - Vibe Coding Hackathon';
  }, []);

  const organizers = [
    {
      name: "Alex Rodriguez",
      role: "Lead Organizer",
      company: "TechFlow Inc.",
      image: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Tech Director",
      company: "CodeVibe Studio",
      image: "👩‍💻"
    },
    {
      name: "Marcus Johnson",
      role: "Community Manager",
      company: "DevConnect",
      image: "👨‍🎓"
    }
  ];

  const sponsors = [
    { name: "TechFlow Inc.", tier: "Platinum" },
    { name: "CodeVibe Studio", tier: "Gold" },
    { name: "DevConnect", tier: "Silver" },
    { name: "InnovateLab", tier: "Bronze" }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Expected Participants" },
    { icon: <Trophy className="w-8 h-8" />, number: "$5,000", label: "Total Prize Pool" },
    { icon: <Code2 className="w-8 h-8" />, number: "5", label: "Coding Tracks" },
    { icon: <Clock className="w-8 h-8" />, number: "6", label: "Hours of Coding" }
  ];

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vibe-black to-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
              <span className="text-vibe-green glow-text">ABOUT</span>
              <br />
              <span className="text-white">THE EVENT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dive deep into the ultimate 6-hour coding experience designed for developers of all levels
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center glass-effect p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-vibe-green mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-20 bg-vibe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-mono font-bold mb-6">
                <span className="text-vibe-green">WHAT IS</span> <span className="text-white">VIBE CODING?</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Vibe Coding is more than just a hackathon—it's a celebration of creativity, innovation, 
                  and the power of code. In just 6 intense hours, developers from around the world come 
                  together to build groundbreaking solutions to real-world problems.
                </p>
                <p>
                  Whether you're a seasoned developer or just starting your coding journey, our event 
                  provides the perfect platform to showcase your skills, learn from peers, and compete 
                  for exciting prizes.
                </p>
                <p>
                  With multiple tracks ranging from AI and Machine Learning to Web3 and Sustainability 
                  Tech, there's a challenge for every passion and skill level.
                </p>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Mission</h3>
                      <p className="text-gray-300">Empower developers to create innovative solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Vision</h3>
                      <p className="text-gray-300">Build the next generation of tech innovators</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Values</h3>
                      <p className="text-gray-300">Innovation, collaboration, and excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">EVENT</span> <span className="text-white">DETAILS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">📅 Date & Time</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Date:</strong> March 15, 2025</p>
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM (EST)</p>
                <p><strong>Duration:</strong> 6 Hours</p>
                <p><strong>Registration Deadline:</strong> March 10, 2025</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">🌍 Location</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Format:</strong> Hybrid Event</p>
                <p><strong>Virtual:</strong> Global participation via Discord</p>
                <p><strong>In-Person:</strong> Multiple tech hubs worldwide</p>
                <p><strong>Platform:</strong> Custom coding environment</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">🏆 Prizes</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>1st Place:</strong> $2,500 + Trophy</p>
                <p><strong>2nd Place:</strong> $1,500 + Medal</p>
                <p><strong>3rd Place:</strong> $1,000 + Certificate</p>
                <p><strong>Track Winners:</strong> Special recognition + Swag</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">🎯 Tracks</h3>
              <div className="space-y-2 text-gray-300">
                <p>• AI & Machine Learning</p>
                <p>• Web3 & Blockchain</p>
                <p>• Sustainability Tech</p>
                <p>• FinTech Innovation</p>
                <p>• Open Innovation</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">👥 Team Structure</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Team Size:</strong> 1-4 members</p>
                <p><strong>Formation:</strong> Before or during event</p>
                <p><strong>Solo Participation:</strong> Welcome</p>
                <p><strong>Skill Mixing:</strong> Encouraged</p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-vibe-green">⚙️ Requirements</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Skill Level:</strong> All levels welcome</p>
                <p><strong>Equipment:</strong> Laptop + Internet</p>
                <p><strong>Tools:</strong> Any programming language</p>
                <p><strong>Age:</strong> 16+ (under 18 needs guardian consent)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-20 bg-vibe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">OUR</span> <span className="text-white">TEAM</span>
            </h2>
            <p className="text-xl text-gray-300">
              Meet the passionate organizers behind Vibe Coding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-effect p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-6xl mb-4">{organizer.image}</div>
                <h3 className="text-xl font-bold mb-2 text-vibe-green">{organizer.name}</h3>
                <p className="text-white font-medium mb-2">{organizer.role}</p>
                <p className="text-gray-400">{organizer.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">OUR</span> <span className="text-white">SPONSORS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Powered by amazing partners who believe in innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-vibe-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2">{sponsor.name}</h3>
                <span className="text-vibe-green text-sm font-medium">{sponsor.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
