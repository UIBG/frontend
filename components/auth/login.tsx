import Link from 'next/link';

const LoginComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow py-10 my-10">
            <div className="bg-white shadow-md rounded-xl max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-primary">
                <form className="space-y-6" action="#">
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Login</h3>
                    
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="email@gmail.com"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <Link href="#" className="text-sm text-blue_primary hover:underline dark:text-blue-500">
                            Forgot your Password?
                        </Link>
                    </div>

                    <div className="space-y-3">
                        <button
                            type="submit"
                            className="w-full text-white bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue_primary dark:hover:bg-blue_primary dark:focus:ring-blue-800"
                        >
                            Login to your account
                        </button>

                        <button
                            type="button"
                            className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:border-gray-500 dark:focus:ring-white"
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
                        </button>
                    </div>

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{' '}
                        <Link href="/auth/register" className="text-blue_primary hover:underline dark:text-blue-500">
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>    
    );
};

export default LoginComponent;
