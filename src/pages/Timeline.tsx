
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, CheckCircle, Circle, Trophy, Users, Code, Presentation } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Timeline = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    document.title = 'Timeline - Vibe Coding Hackathon';
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    {
      date: "March 1, 2025",
      time: "12:00 AM",
      title: "Registration Opens",
      description: "Early bird registration begins with special pricing",
      icon: <Users className="w-6 h-6" />,
      status: "completed",
      type: "milestone"
    },
    {
      date: "March 10, 2025",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Final deadline for hackathon registration",
      icon: <Calendar className="w-6 h-6" />,
      status: "upcoming",
      type: "deadline"
    },
    {
      date: "March 15, 2025",
      time: "9:00 AM",
      title: "Check-in & Setup",
      description: "Participant check-in, team formation, and workspace setup",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "upcoming",
      type: "event"
    },
    {
      date: "March 15, 2025",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address, rules explanation, and challenge reveal",
      icon: <Presentation className="w-6 h-6" />,
      status: "upcoming",
      type: "event"
    },
    {
      date: "March 15, 2025",
      time: "10:30 AM",
      title: "Coding Begins!",
      description: "The 6-hour coding marathon officially starts",
      icon: <Code className="w-6 h-6" />,
      status: "upcoming",
      type: "milestone"
    },
    {
      date: "March 15, 2025",
      time: "12:30 PM",
      title: "Lunch Break",
      description: "Networking lunch and mentor check-ins",
      icon: <Clock className="w-6 h-6" />,
      status: "upcoming",
      type: "break"
    },
    {
      date: "March 15, 2025",
      time: "4:00 PM",
      title: "Coding Deadline",
      description: "All submissions must be completed and uploaded",
      icon: <Code className="w-6 h-6" />,
      status: "upcoming",
      type: "deadline"
    },
    {
      date: "March 15, 2025",
      time: "4:30 PM",
      title: "Presentations",
      description: "Teams present their solutions to judges",
      icon: <Presentation className="w-6 h-6" />,
      status: "upcoming",
      type: "event"
    },
    {
      date: "March 15, 2025",
      time: "6:00 PM",
      title: "Judging & Results",
      description: "Winners announcement and closing ceremony",
      icon: <Trophy className="w-6 h-6" />,
      status: "upcoming",
      type: "milestone"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-vibe-green';
      case 'current': return 'bg-yellow-500 animate-pulse';
      case 'upcoming': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'milestone': return 'border-vibe-green bg-vibe-green/10';
      case 'deadline': return 'border-red-500 bg-red-500/10';
      case 'event': return 'border-blue-500 bg-blue-500/10';
      case 'break': return 'border-yellow-500 bg-yellow-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  // Calculate countdown to event
  const eventDate = new Date('2025-03-15T10:30:00');
  const timeDiff = eventDate.getTime() - currentTime.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vibe-black to-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
              <span className="text-vibe-green glow-text">EVENT</span>
              <br />
              <span className="text-white">TIMELINE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track every moment of the Vibe Coding hackathon journey
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-vibe-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-mono font-bold mb-4">
              <span className="text-vibe-green">COUNTDOWN TO</span> <span className="text-white">CODING</span>
            </h2>
            <p className="text-gray-300">Time until the hackathon begins</p>
          </div>
          
          {timeDiff > 0 ? (
            <div className="grid grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="200">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
                { value: seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg text-center">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-vibe-green mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-effect p-8 rounded-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-mono font-bold text-vibe-green mb-4">
                🚀 EVENT LIVE!
              </div>
              <p className="text-gray-300">The hackathon is currently in progress!</p>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-vibe-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">DETAILED</span> <span className="text-white">SCHEDULE</span>
            </h2>
            <p className="text-xl text-gray-300">
              Complete timeline of events and milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-vibe-green"></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-20 w-16 h-16 rounded-full ${getStatusColor(event.status)} flex items-center justify-center border-4 border-vibe-black`}>
                  <div className="text-black">
                    {event.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : event.icon}
                  </div>
                </div>
                
                {/* Event Card */}
                <div className={`glass-effect p-6 rounded-lg border-l-4 ${getTypeColor(event.type)} hover:scale-105 transition-transform duration-300`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-vibe-green">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-mono">{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                      event.status === 'completed' ? 'bg-vibe-green text-black' :
                      event.status === 'current' ? 'bg-yellow-500 text-black' :
                      'bg-gray-600 text-white'
                    }`}>
                      {event.status}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">IMPORTANT</span> <span className="text-white">NOTES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="glass-effect p-6 rounded-lg">
              <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-vibe-green">Time Zones</h3>
              <p className="text-gray-300">
                All times are in EST. International participants should convert to their local time zone.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="glass-effect p-6 rounded-lg">
              <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-vibe-green">Attendance</h3>
              <p className="text-gray-300">
                Please arrive 30 minutes early for check-in. Late arrivals may miss important information.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="glass-effect p-6 rounded-lg">
              <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-vibe-green">Submissions</h3>
              <p className="text-gray-300">
                Projects must be submitted via GitHub by 4:00 PM sharp. No late submissions accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Timeline;
