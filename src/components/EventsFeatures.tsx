import React from 'react';

const features = [
  {
    name: 'Tech Spardha',
    description: 'Dance, Poetry, Singing, Drama, Antakshri',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'Rang Utsav',
    description: 'Rangoli, T-shirt Painting, Poster Making, Mehndi',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Riwaaz',
    description: 'Dance, Poetry, Singing, Drama, Antakshri',
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'Kala Utsav',
    description: 'Dance, Poetry, Singing, Drama, Antakshri',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Fashion Mela',
    description: 'Dance, Poetry, Singing, Drama, Antakshri',
    color: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Thrill Arena',
    description: 'Rodeos, Games, Bazar, and more',
    color: 'from-green-400 to-teal-500'
  }
];

const EventFeatures: React.FC = () => {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105`}
        >
          <h3 className="text-2xl font-bold mb-3">{feature.name}</h3>
          <p className="text-white/80">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default EventFeatures;