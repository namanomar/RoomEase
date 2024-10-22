import React from 'react';
import { Users, Star, Clock, Building } from 'lucide-react';
import Image from 'next/image';
import about_image from 'public/images/hero-1.jpeg'
const AboutSection = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, label: 'Happy Clients', value: '2,000+' },
    { icon: <Star className="w-5 h-5" />, label: 'Years Experience', value: '10+' },
    { icon: <Clock className="w-5 h-5" />, label: 'Hours Support', value: '24/7' },
    { icon: <Building className="w-5 h-5" />, label: 'Locations', value: '15' }
  ];

  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:order-last lg:h-full">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-purple-100 blur-3xl opacity-30"></div>
            
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <Image 
                src={about_image} 
                alt="Our Team at Work" 
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                width={500}
                height={500}
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="lg:py-12">
            <div className="relative">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6">
                About RoomEase
              </span>

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Transforming Hotel
                <span className="block text-blue-600">Experiences Since 2024</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                At RoomEase, we believe in creating memorable stays that combine luxury with 
                comfort. Our journey began with a simple vision: to revolutionize the 
                hospitality industry by providing exceptional service and innovative solutions.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Today, we are proud to serve thousands of guests across our locations, 
                maintaining the same dedication to excellence that inspired our founding.
              </p>

              {/* Stats Grid */}
              

              {/* Values */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Our Values
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600">Excellence in every detail</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600">Customer-centric approach</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-600">Innovation in hospitality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;