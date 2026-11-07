import React from 'react';

const heroImageUrl: string = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop";

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-50 pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-zinc-950 leading-tight tracking-tight">
            Welcome to Our<br />Community
          </h1>
          <p className="text-2xl text-zinc-600 max-w-xl">
            Share Your thoughts here. A place for readers and writers to connect.
          </p>
          <button className="bg-zinc-950 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-800 transition duration-300 shadow-lg">
            Explore Posts
          </button>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-100 rounded-3xl opacity-50 filter blur-2xl"></div>
          
          <img 
            src={heroImageUrl} 
            alt="Person writing in a notebook" 
            className="relative rounded-3xl shadow-2xl object-cover w-full max-w-lg h-auto aspect-[4/5] border-4 border-white"
            style={{ objectPosition: 'center top' }}
          />
        </div>
        
      </div>
    </main>
  );
};