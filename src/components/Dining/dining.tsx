"use client"
import React, { useState } from 'react';
import { assets } from '../../../public/assets/assets';
import Image, { StaticImageData } from 'next/image';

const menuItems: Record<string, string[]> = {
  breakfast: ['Eggs & Toast', 'Pancakes', 'Bacon', 'Oatmeal', 'Coffee'],
  lunch: ['Caesar Salad', 'Sandwich', 'Soup', 'Grilled Chicken', 'Pasta'],
  dinner: ['Steak', 'Salmon', 'Rice Bowl', 'Vegetable Curry', 'Pasta'],
};

type ColorScheme = {
  bg: string;
  hover: string;
  text: string;
  icon: StaticImageData; // Assuming you're using `next/image` assets.
};

const colorSchemes: Record<string, ColorScheme> = {
  breakfast: {
    bg: 'bg-sky-400',
    hover: 'bg-sky-500',
    text: 'text-sky-100',
    icon: assets.breakfast
  },
  lunch: {
    bg: 'bg-amber-400',
    hover: 'bg-amber-500',
    text: 'text-amber-100',
    icon: assets.lunch
  },
  dinner: {
    bg: 'bg-red-400',
    hover: 'bg-red-500',
    text: 'text-red-100',
    icon: assets.dinner
  }
};

interface MealCardProps {
  type: string;
}

const MealCard: React.FC<MealCardProps> = ({ type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const lowerType = type.toLowerCase();
  const colors = colorSchemes[lowerType];

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out ${colors.bg} ${
        isHovered ? `${colors.hover} shadow-xl` : ''
      }`}
      style={{ height: isHovered ? '320px' : '240px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="p-6 h-full transition-all duration-300 ease-in-out"
        style={{
          transform: isHovered ? 'translateY(-80px)' : 'translateY(0)'
        }}
      >
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-48">
          <Image src={colors.icon} alt="" className='w-16 h-16 mb-4' />
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            {type}
          </h2>
        </div>

        {/* Menu Items */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-2">Menu:</h3>
          <ul className="space-y-0">
            {menuItems[lowerType].map((item, index) => (
              <li
                key={index}
                className={`${colors.text} transition-all duration-300 hover:text-white`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MealTimeCards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Daily Menu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MealCard type="Breakfast" />
          <MealCard type="Lunch" />
          <MealCard type="Dinner" />
        </div>
      </div>
    </div>
  );
};

export default MealTimeCards;
