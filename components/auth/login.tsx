'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
    
        try {
          const response = await fetch("https://backend-production-fd6d.up.railway.app/api/v1/auth/authenticate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, }),
          });
          
          if (response.status === 403) {
            setError('You have not registered.');
            return;
          }

          const data = await response.json();
          if (response.ok && data.token) {
            localStorage.setItem('token', data.token);
            setShowModal(true);
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          console.error('Login failed:', error);
          setError('Your username or password is incorrect');
        }
      };
    

    return (
        <div className="flex flex-col items-center justify-center flex-grow py-10 my-10">
            <div className="bg-primary shadow-md rounded-xl max-w-sm p-4 sm:p-6 lg:p-8">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <h3 className="text-xl font-bold text-center text-white">Login</h3>

                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                            Username
                        </label>
                        <input
                            type="username"
                            name="username"
                            id="username"
                            className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                            placeholder="Your username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                    <div className="flex items-center justify-between">
                        <Link href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot your Password?
                        </Link>
                    </div>

                    <div className="space-y-3">
                        <button
                            type="submit"
                            className="w-full text-white bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Login to your account
                        </button>

                        {/* <button
                            type="button"
                            className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-white font-medium text-sm px-5 py-2.5 text-center"
                        >
                            <span className="flex items-center justify-center gap-2 font-medium py-1">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 48 48"
                                    enableBackground="new 0 0 48 48"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#FFC107"
                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                    ></path>
                                    <path
                                        fill="#FF3D00"
                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                    ></path>
                                    <path
                                        fill="#4CAF50"
                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                    ></path>
                                    <path
                                        fill="#1976D2"
                                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                    ></path>
                                </svg>
                                Login with Google
                            </span>
                        </button> */}
                    </div>

                    <div className="text-sm font-medium text-gray-300">
                        Not registered?{' '}
                        <Link href="/auth/register" className="text-blue-500 hover:underline">
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
            {/* Success Modal */}
            {showModal && (
                <div id="successModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md">
                        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Success</span>
                            </div>
                            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Login successful!</p>
                            <button onClick={() => router.replace('/')} type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                                Continue to Homepage
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginComponent;
