import React, { useState } from 'react';
import { User, Lock, Image as ImageIcon } from '@phosphor-icons/react';

export const Profile: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        photo: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Profile data submitted:', formData);
    };

    return (
        <main className="min-h-screen bg-zinc-50 pt-32 pb-20 px-6 md:px-10 flex items-center justify-center">
            <div className="max-w-5xl w-full mx-auto bg-white border border-zinc-100 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Side: Photo & Banner */}
                <div className="relative bg-zinc-900 hidden md:flex flex-col justify-end p-10 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="Community writing and profile setup"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 space-y-3">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Join Our Writer Network
                        </h2>
                        <p className="text-zinc-300 text-sm">
                            Create your profile to share thoughts, engage with posts, and personalize your experience.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
                            Create Profile
                        </h1>
                        <p className="text-zinc-500 mt-2 text-sm">
                            Please fill in your details to set up your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="name">Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <User size={20} />
                                </span>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="username">Username</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    @
                                </span>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="photo">Photo URL</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <ImageIcon size={20} />
                                </span>
                                <input
                                    type="text"
                                    id="photo"
                                    name="photo"
                                    placeholder="photo URL"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <Lock size={20}/>
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="*********"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="confirmPassword">Confirm Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <Lock size={20}/>
                                </span>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="*********"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                type="button"
                                className="w-1/2 border border-zinc-300 text-zinc-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-100 transition duration-300 text-center"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="w-1/2 bg-zinc-950 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-800 transition duration-300 shadow-lg text-center"
                            >
                                Create
                            </button>
                        </div>

                    </form>    
                </div>

            </div>
        </main>
    );
};