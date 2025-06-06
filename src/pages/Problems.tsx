
import React, { useEffect } from 'react';
import { Brain, Leaf, Shield, Zap, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodingLoader from '../components/CodingLoader';

const Problems = () => {
  useEffect(() => {
    document.title = 'Problem Statements - CodeStorm Elite';
  }, []);

  const problems = [
    {
      id: 1,
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Code Review Assistant",
      theme: "Artificial Intelligence",
      difficulty: "Advanced",
      description: "Build an intelligent system that automatically reviews code, identifies bugs, suggests optimizations, and provides learning recommendations for developers.",
      requirements: [
        "Real-time code analysis",
        "Bug detection and fixing suggestions",
        "Performance optimization recommendations",
        "Learning path generation for skill improvement"
      ],
      techStack: ["Machine Learning", "NLP", "Static Analysis", "AI/ML APIs"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: <Leaf className="w-12 h-12" />,
      title: "Carbon Footprint Tracker for Developers",
      theme: "Sustainability Tech",
      difficulty: "Intermediate",
      description: "Create a comprehensive platform that tracks and reduces the environmental impact of software development activities and cloud infrastructure usage.",
      requirements: [
        "Real-time energy consumption monitoring",
        "Carbon footprint calculation for code deployment",
        "Green coding best practices recommendations",
        "Team sustainability leaderboards"
      ],
      techStack: ["Environmental APIs", "Data Visualization", "Cloud Monitoring", "Web3"],
      color: "bg-green-500"
    },
    {
      id: 3,
      icon: <Shield className="w-12 h-12" />,
      title: "Decentralized Identity Verification System",
      theme: "Web3 & Blockchain",
      difficulty: "Advanced",
      description: "Develop a blockchain-based identity verification system that ensures privacy, security, and user control over personal data without central authorities.",
      requirements: [
        "Self-sovereign identity management",
        "Zero-knowledge proof implementation",
        "Multi-chain compatibility",
        "Privacy-preserving verification"
      ],
      techStack: ["Blockchain", "Smart Contracts", "Cryptography", "DID Standards"],
      color: "bg-purple-500"
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "Real-time Micro-Investment Platform",
      theme: "FinTech Innovation",
      difficulty: "Intermediate",
      description: "Build a platform that enables users to invest spare change from daily transactions into diversified portfolios with real-time market analysis.",
      requirements: [
        "Micro-transaction processing",
        "Real-time market data integration",
        "Risk assessment algorithms",
        "Automated portfolio rebalancing"
      ],
      techStack: ["Financial APIs", "Real-time Data", "Security", "Mobile Development"],
      color: "bg-yellow-500"
    },
    {
      id: 5,
      icon: <Globe className="w-12 h-12" />,
      title: "Global Disaster Response Coordination Hub",
      theme: "Open Innovation",
      difficulty: "Advanced",
      description: "Create a comprehensive system that coordinates disaster response efforts globally, connecting volunteers, resources, and affected communities in real-time.",
      requirements: [
        "Real-time disaster monitoring",
        "Resource and volunteer matching",
        "Multi-language communication system",
        "Emergency alert distribution network"
      ],
      techStack: ["Real-time Systems", "GIS", "Communication APIs", "Machine Learning"],
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vibe-gray to-vibe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
              <span className="text-vibe-green glow-text">PROBLEM</span>
              <br />
              <span className="text-white">STATEMENTS</span>
            </h1>
            <CodingLoader className="mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your challenge and storm the code world. Each problem is designed to push your limits and showcase your elite coding skills.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-20 bg-vibe-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="glass-effect p-8 rounded-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 ${problem.color} rounded-lg text-white group-hover:animate-pulse`}>
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-vibe-green transition-colors">
                        {problem.title}
                      </h3>
                      <span className={`px-3 py-1 ${problem.color} text-white text-sm rounded-full`}>
                        #{problem.id}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-vibe-green font-semibold">{problem.theme}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-orange-400">{problem.difficulty}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {problem.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {problem.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-vibe-green rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Suggested Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {problem.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-vibe-gray border border-vibe-green text-vibe-green rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-vibe-gray">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Ready to storm this challenge?</span>
                    <CodingLoader size="sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <div className="glass-effect p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Challenge Rules</h3>
              <div className="space-y-3 text-gray-300">
                <p>🏆 Choose ONE problem statement for your team</p>
                <p>⏱️ You have exactly 6 hours to build your solution</p>
                <p>💻 Any programming language or framework is allowed</p>
                <p>🚀 Focus on functionality, innovation, and presentation</p>
                <p>🎯 Bonus points for live demos and real-world impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Problems;
