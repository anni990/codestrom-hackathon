
import React, { useState, useEffect } from 'react';
import { User, Mail, Users, Code, MapPin, Calendar, Trophy } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CodingLoader from '../components/CodingLoader';

const Enrollment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    teamName: '',
    skillLevel: '',
    experience: '',
    interests: [],
    dietaryRestrictions: '',
    tshirtSize: ''
  });

  useEffect(() => {
    document.title = 'Free Enrollment - CodeStorm Elite';
  }, []);

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const interests = ['AI/ML', 'Web Development', 'Mobile Apps', 'Blockchain', 'Data Science', 'Cybersecurity'];
  const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-vibe-black text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center max-w-2xl mx-auto px-4" data-aos="fade-up">
          <div className="glass-effect p-12 rounded-lg">
            <Trophy className="w-20 h-20 text-vibe-green mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl font-bold text-vibe-green mb-4 glow-text">
              Welcome to the Storm!
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Your free enrollment for CodeStorm Elite has been confirmed!
            </p>
            <div className="space-y-3 text-gray-300 mb-8">
              <p>📧 Confirmation email sent to: <span className="text-vibe-green">{formData.email}</span></p>
              <p>📅 Event Date: March 15, 2025</p>
              <p>📍 Location: TechHub Silicon Valley</p>
              <p>⏰ Time: 10:00 AM - 4:00 PM</p>
            </div>
            <div className="bg-vibe-gray p-4 rounded-lg">
              <p className="text-sm text-gray-400">
                Get ready to storm the coding world! Check your email for further details and preparation guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vibe-gray to-vibe-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6" data-aos="fade-up">
            <span className="text-vibe-green glow-text">JOIN THE</span>
            <br />
            <span className="text-white">STORM</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <CodingLoader />
            <p className="text-xl text-gray-300">
              Free enrollment for CodeStorm Elite - No fees, just pure coding passion!
            </p>
            <CodingLoader />
          </div>
          <div className="glass-effect p-6 rounded-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <Calendar className="w-8 h-8 text-vibe-green mx-auto mb-2" />
                <p className="text-sm text-gray-300">March 15, 2025</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-vibe-green mx-auto mb-2" />
                <p className="text-sm text-gray-300">Silicon Valley</p>
              </div>
              <div>
                <Trophy className="w-8 h-8 text-vibe-green mx-auto mb-2" />
                <p className="text-sm text-gray-300">$5,000 Prizes</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-vibe-green mx-auto mb-2" />
                <p className="text-sm text-gray-300">500+ Coders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-vibe-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8 text-vibe-green glow-text">
              Storm Registration - 100% FREE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <label className="block text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Team Name (Optional)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                  placeholder="Leave empty if joining solo"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  <Code className="w-4 h-4 inline mr-2" />
                  Skill Level *
                </label>
                <select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                  required
                >
                  <option value="">Select your level</option>
                  {skillLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">T-Shirt Size</label>
                <select
                  name="tshirtSize"
                  value={formData.tshirtSize}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                >
                  <option value="">Select size</option>
                  {tshirtSizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                  placeholder="Vegetarian, Vegan, Allergies, etc."
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 mb-2">Coding Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 bg-vibe-gray border border-vibe-green rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-vibe-green"
                placeholder="Tell us about your coding journey..."
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 mb-4">Areas of Interest (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map(interest => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="rounded border-vibe-green bg-vibe-gray text-vibe-green focus:ring-vibe-green"
                    />
                    <span className="text-gray-300">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-vibe-gray rounded-lg">
              <h3 className="text-xl font-bold text-vibe-green mb-4">What You'll Get - FREE!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>✅ Free access to 6-hour hackathon</div>
                <div>✅ Free meals and refreshments</div>
                <div>✅ Free CodeStorm Elite t-shirt</div>
                <div>✅ Free networking opportunities</div>
                <div>✅ Chance to win $5,000 in prizes</div>
                <div>✅ Free mentorship from industry experts</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-vibe-green text-black py-4 px-8 rounded-lg text-xl font-bold hover:bg-white transition-all duration-300 hover:scale-105 animate-glow-soft disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <CodingLoader size="sm" />
                  <span>Joining the Storm...</span>
                </>
              ) : (
                <>
                  <span>Join CodeStorm Elite - FREE</span>
                  <Trophy className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              No payment required. Your spot is reserved immediately upon registration.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;
