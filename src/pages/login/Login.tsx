import React, {useState} from 'react';
import {User, Lock, ArrowRight} from '@phosphor-icons/react';

export const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
    };

    return (
        <main className="min-h-screen bg-zinc-50 pr-32 pb-20 px-6 md:px-10 flex items-center justify-center">
            <div className="max-w-5xl w-full mx-auto bg-white border border-zinc-100 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="relative bg-zinc-900 hidden md:flex flex-col justify-end p-10 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
                        alt="Workspace and laptop representing blogging"
                        className="w-full h-full object-cover opacity-60"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 space-y-3">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">
                            "Words are powerful. Share your story with the world."
                        </h2>
                        <p className="text-zinc-300 text-sm">
                            Welcome back to your personal hub for ideas, posts, and connection.
                        </p>
                    </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
                            Log in
                        </h1>
                        <p className="text-zinc-500 mt-2 text-sm">
                            Enter your credentials to access your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Username</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <User size={20} />
                                </span>
                                <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline focus:ring-2 focus:ring-zinc-950 focus:bg-white-transition" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                                    <Lock size={20} />
                                </span>
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-zinc-950 focus:bg-white transition" required />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                            type="submit"
                            className="w-full bg-zinc-950 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-800 transition duration-300 shadow lg text-center flex items-center justify-center gap-2">
                                Log in
                                <ArrowRight size={18} weight="bold" />
                            </button>
                        </div>
                
                        <div className="text-center pt-4 border-t border-zinc-100 mt-6">
                            <p className="text-sm text-zinc-600">
                                Don't have an account yet? {''}
                                <a href="/profile"
                                className="font-semibold text-zinc-950 hover:underline transition">
                                    Create a new account
                                </a>
                            </p>
                        </div>

                    </form>
                </div>

            </div>
        </main>
    );
};