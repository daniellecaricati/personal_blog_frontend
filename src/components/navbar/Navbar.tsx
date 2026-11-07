import React from 'react';

export const Navbar = () => {
 
  const userAvatarUrl = "https://randomuser.me/api/portraits/women/44.jpg";

  return (
    // Fixed, floating navbar with shadow and blur effect
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm border border-zinc-100 rounded-full px-8 py-4 shadow-xl flex items-center justify-between">
        

        <div className="text-2xl font-bold text-zinc-950 tracking-tight">
          Personal Blog
        </div>


        <ul className="flex items-center gap-10 text-lg font-medium text-zinc-700">
          <li><a href="#" className="text-zinc-950 font-semibold">Posts</a></li>
          <li><a href="#" className="hover:text-zinc-950 transition">Themes</a></li>
          <li><a href="#" className="hover:text-zinc-950 transition">Create Theme</a></li>
          <li><a href="#" className="hover:text-zinc-950 transition">Profile</a></li>
        </ul>

        {/* User Profile Section */}
        <div className="flex items-center gap-4 border-l pl-6 border-zinc-100">
          <img 
            src={userAvatarUrl} 
            alt="User Profile" 
            className="w-11 h-11 rounded-full object-cover border-2 border-zinc-100"
          />
          <button className="text-lg font-medium text-zinc-700 hover:text-red-600 transition">
            Exit
          </button>
        </div>

      </nav>
    </header>
  );
};