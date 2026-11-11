import React, { useState, useEffect } from 'react';
import { User, Lock, Image as ImageIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { createUser } from '../../services/Service';
import type UserModel from '../../models/User'; //Alias to User.ts from models/User


export const Profile: React.FC = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const[confirmPassword, setConfirmPassword] = useState<string>('');
    const[error, setError]= useState<string>('');

    const[user, setUser] = useState<UserModel>({
        id:0,
        name: '',
        username: '',
        password: '',
        photo: '',
        post: null,
    });

    useEffect(() => {
        if(user.id !== 0) {
            handleRedirect();
        }
    }, [user]);

    function handleRedirect() {
        navigate('/login');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

   const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
   }

   async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (confirmPassword === user.password && user.password.length >= 8) {
        setIsLoading(true);
        try {
            await createUser('/users/create', user, setUser);
            alert('User created successfully!');
        } catch (err) {
            console.error('Error creating user:', err);
            alert('Error processing registration! User may already exist.');
            setUser({ ...user, password: ''});
            setConfirmPassword('');
        }
        setIsLoading(false);
    } else {
        setError('Inconsistent data! Passwords must match and be at least 8 characters long.');
        setUser({...user, password:''});
        setConfirmPassword('');
    }
   }

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

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleCreateUser} className="space-y-5">
                        
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
                                    value={user.name}
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
                                    value={user.username}
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
                                    value={user.photo}
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
                                    value={user.password}
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
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:bg-white transition" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                type="button"
                                onClick={handleRedirect}
                                className="w-1/2 border border-zinc-300 text-zinc-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-100 transition duration-300 text-center"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="w-1/2 bg-zinc-950 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-zinc-800 transition duration-300 shadow-lg text-center flex items-center justify-center"
                            >
                                {isLoading ? <ClipLoader color="#ffffff" size={20} /> : <span>Create</span>}
                            </button>
                        </div>

                    </form>    
                </div>

            </div>
        </main>
    );
};