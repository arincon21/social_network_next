"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FilePen, LogIn } from "lucide-react";

const LandingPage: React.FC = () => {
    const [tab, setTab] = useState<"register" | "login">("login");
    const router = useRouter();

    return (
        <main className="h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-[#FF6B47] to-[#FF8A65]">
            {/* Left - promotional (60%) */}
            <section className="hidden md:flex md:w-3/5 p-12 relative text-white flex-col justify-center overflow-hidden">
                <Link href="/landing" className="absolute top-6 left-6 flex items-center gap-3">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" fill="white" />
                    </svg>
                    <div className="font-bold tracking-widest">OLYMPUS</div>
                </Link>

                <div className="max-w-[640px] pl-6">
                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 drop-shadow-sm">Bienvenido a la red social más grande del mundo</h1>
                    <p className="text-sm md:text-base text-white/90 mb-8">Somos la mejor y más grande red social con 5 mil millones de usuarios activos en todo el mundo. ¡Comparte tus pensamientos, escribe publicaciones en el blog, muestra tu música favorita a través de Spotify, gana insignias y mucho más!</p>

                    <button className="inline-block border border-white text-white rounded px-6 py-3 transition transform hover:scale-[1.02] hover:bg-white/10">¡Regístrate ahora!</button>
                </div>

                {/* decorative grid of faces effect placeholder (semi-transparent) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" />
            </section>

            {/* Right - panel (40%) */}
            <section className="max-w-2/3 flex items-center justify-center p-6">
                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl">
                    <div className="flex h-full">
                        {/* Vertical tabs - visible on md+ */}
                        <nav className="flex flex-1 max-w-[70px] flex-col items-center justify-center bg-gray-100 border-r border-gray-300">
                            <button
                                onClick={() => setTab('register')}
                                className={`w-full flex-1 text-sm font-semibold py-2 flex items-center justify-center transition cursor-pointer ${tab === 'register' ? 'bg-white text-[#FF6B47]' : 'bg-transparent text-gray-400'}`}
                                aria-label="Register"
                            >
                                <FilePen />
                            </button>

                            <button
                                onClick={() => setTab('login')}
                                className={`w-full flex-1 text-sm font-semibold py-2 flex items-center justify-center transition cursor-pointer ${tab === 'login' ? 'bg-white text-[#FF6B47]' : 'bg-transparent text-gray-400'}`}
                                aria-label="Login"
                            >
                                <LogIn />
                            </button>
                        </nav>

                        {/* Main content */}
                        <div className="flex-1 min-h-[700px]">

                            {/* Title matching the screenshots */}
                            <div className="mb-4">
                                <h2 className="text-xl  font-semibold text-gray-700 p-6">{tab === 'register' ? 'Register to Olympus' : 'Login to your Account'}</h2>
                                <div className="border-t border-gray-300" />
                            </div>

                            {tab === 'register' ? (
                                <form className="space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); router.push('/news'); }}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input placeholder="First Name" className="px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5FBF]/20" />
                                        <input placeholder="Last Name" className="px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5FBF]/20" />
                                    </div>

                                    <input placeholder="Your Email" type="email" className="w-full px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5FBF]/20" />
                                    <input placeholder="Your Password" type="password" className="w-full px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5FBF]/20" />

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="relative">
                                            <input placeholder="Your Birthday" type="date" className="w-full px-5 py-4 pr-12 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5FBF]/20" />
                                            <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>

                                        <select className="px-5 py-4 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none">
                                            <option>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <label className="flex items-center gap-3 text-sm">
                                        <input type="checkbox" className="w-5 h-5 rounded border-gray-200" />
                                        <span className="text-gray-600">I accept the <span className="text-[#FF6B47] font-semibold">Terms and Conditions</span></span>
                                    </label>

                                    <button type="submit" className="w-full bg-[#8B5FBF] text-white rounded-lg py-4 font-semibold transition hover:opacity-95">Complete Registration!</button>
                                </form>
                            ) : (
                                <form className="space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); router.push('/news'); }}>
                                    <input placeholder="Your Email" type="email" className="w-full px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B47]/20" />
                                    <input placeholder="Your Password" type="password" className="w-full px-5 py-4 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B47]/20" />

                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center gap-2 text-gray-600"><input type="checkbox" className="w-5 h-5 rounded border-gray-200" /> Remember Me</label>
                                        <a className="text-[#FF6B47] hover:underline text-sm">Forgot my Password</a>
                                    </div>

                                    <button type="submit" className="w-full bg-[#FF6B47] text-white rounded-lg py-4 font-semibold transition hover:opacity-95">Login</button>

                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex-1 h-px bg-gray-200" />
                                        <div className="text-xs text-gray-400">OR</div>
                                        <div className="flex-1 h-px bg-gray-200" />
                                    </div>

                                    <button className="w-full bg-[#4267B2] text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-3">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.05H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v7.05C18.34 21.2 22 17.06 22 12.07z" /></svg>
                                        Login with Facebook
                                    </button>

                                    <button className="w-full bg-[#1DA1F2] text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-3">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.66.29-1.37.49-2.12.58.76-.45 1.34-1.16 1.61-2.01-.71.42-1.5.72-2.34.88A3.54 3.54 0 0012.07 8.5c0 .28.03.55.09.81C8.03 9.05 4.6 7.13 2.2 4.09c-.31.55-.49 1.18-.49 1.86 0 1.29.65 2.43 1.64 3.1-.6-.02-1.17-.18-1.66-.46v.05c0 1.79 1.27 3.28 2.96 3.62-.31.09-.64.14-.98.14-.24 0-.47-.02-.69-.06.47 1.46 1.82 2.53 3.42 2.56A7.12 7.12 0 012 19.54 10.05 10.05 0 007.29 21c6.2 0 9.58-5.26 9.58-9.82v-.45c.66-.47 1.23-1.06 1.68-1.73-.6.27-1.24.46-1.91.54.69-.43 1.21-1.1 1.46-1.9z" /></svg>
                                        Login with Twitter
                                    </button>

                                    <div className="text-sm text-gray-500 text-center">Don&apos;t you have an account? <button onClick={() => setTab('register')} className="text-[#FF6B47] font-semibold">Register Now!</button></div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;
