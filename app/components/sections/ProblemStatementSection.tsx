"use client";
import React from 'react';
import { CosmicSection } from '../ui/CosmicSection';
import { SpaceSectionHeader } from '../SpaceSectionHeader';
import { CosmicCard, CosmicCardHeader, CosmicCardTitle, CosmicCardContent } from '../ui/CosmicCard';
import { CosmicButton } from '../ui/CosmicButton';

export function ProblemStatementSection() {
  const problemTracks = [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & ML",
      icon: "🤖",
      description: "Develop intelligent solutions using machine learning, computer vision, and natural language processing.",
      color: "from-blue-500 to-cyan-500",
      challenges: ["Smart Healthcare", "Autonomous Systems", "Predictive Analytics"],
      difficulty: "Advanced"
    },
    {
      id: "blockchain",
      title: "Blockchain & Web3",
      icon: "⛓️",
      description: "Build decentralized applications and explore the future of digital transactions and ownership.",
      color: "from-purple-500 to-pink-500",
      challenges: ["DeFi Solutions", "NFT Platforms", "Smart Contracts"],
      difficulty: "Expert"
    },
    {
      id: "sustainability",
      title: "Climate & Sustainability",
      icon: "🌱",
      description: "Create eco-friendly solutions to combat climate change and promote sustainable living.",
      color: "from-green-500 to-emerald-500",
      challenges: ["Carbon Tracking", "Renewable Energy", "Waste Management"],
      difficulty: "Intermediate"
    },
    {
      id: "healthcare",
      title: "Digital Healthcare",
      icon: "🏥",
      description: "Revolutionize healthcare with digital solutions for better patient care and medical research.",
      color: "from-red-500 to-rose-500",
      challenges: ["Telemedicine", "Health Analytics", "Medical IoT"],
      difficulty: "Intermediate"
    },
    {
      id: "fintech",
      title: "Financial Technology",
      icon: "💰",
      description: "Innovate in digital payments, banking, and financial services for the next generation.",
      color: "from-yellow-500 to-orange-500",
      challenges: ["Digital Payments", "Micro-lending", "Investment Tools"],
      difficulty: "Advanced"
    },
    {
      id: "social-impact",
      title: "Social Impact",
      icon: "🤝",
      description: "Develop solutions that create positive social change and improve community welfare.",
      color: "from-indigo-500 to-blue-500",
      challenges: ["Education Access", "Community Safety", "Digital Inclusion"],
      difficulty: "Beginner"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <CosmicSection id="problem-statement" className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-blue-900/5 to-cyan-900/5 pointer-events-none" />
      
      <div className="relative z-10">
        <SpaceSectionHeader
          title="Problem Statements"
          subtitle="Choose your mission and solve challenges that matter to the universe"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 -mt-20">
          {problemTracks.map((track, index) => (
            <CosmicCard 
              key={track.id}
              variant="feature" 
              hover 
              glow
              className="group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <CosmicCardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{track.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getDifficultyColor(track.difficulty)}`}>
                      {track.difficulty}
                    </span>
                  </div>
                  <CosmicCardTitle className="text-xl mb-3">{track.title}</CosmicCardTitle>
                </CosmicCardHeader>
                
                <CosmicCardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{track.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold font-electrolize text-cyan-300 uppercase tracking-wider">
                      Key Challenges
                    </h4>
                    <ul className="space-y-1">
                      {track.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CosmicCardContent>
              </div>
            </CosmicCard>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <CosmicCard variant="highlight" className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-bungee text-white">
                Ready to Take on the Challenge?
              </h3>
              <p className="text-lg text-gray-300 font-rajdhani">
                Register now to access detailed problem statements, starter code, and resources 
                to help you build winning solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CosmicButton variant="primary" size="lg" glow>
                  Register for <span className="font-transformers tracking-wide">PEC HACKS 3.0</span>
                </CosmicButton>
                <CosmicButton variant="ghost" size="lg">
                  Download Problem Pack
                </CosmicButton>
              </div>
            </div>
          </CosmicCard>
        </div>
      </div>
    </CosmicSection>
  );
}
