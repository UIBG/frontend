'use client';
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { Faculty, Major } from "@/app/utils/type";
import { jwtDecode } from "jwt-decode";

const RsvpForm = () => {
    const [name, setName] = useState('');
    const [faculty, setFaculty] = useState('');
    const [major, setMajor] = useState('');
    const [batch, setBatch] = useState<number | ''>('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [imageFile, setImage] = useState<File | null>(null);
    const [faculties, setFaculties] = useState<Faculty[]>([]);
    const [majors, setMajors] = useState<Major[]>([]);
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const tournamentId = searchParams.get('tournamentId');  

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setName(sessionStorage.getItem('name') || '');
            setFaculty(sessionStorage.getItem('faculty') || '');
            setMajor(sessionStorage.getItem('major') || '');
            setBatch(parseInt(sessionStorage.getItem('batch') || '') || '');
            setPhoneNumber(sessionStorage.getItem('phoneNumber') || '');
        }
    }, []);

    useEffect(() => {
        const fetchFaculties = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://backend-production-fd6d.up.railway.app/api/faculty-major/faculties', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const formattedData = data.map((faculty: any) => ({
                    facultyId: faculty.facultyId,
                    facultyName: faculty.facultyName,
                    majorList: faculty.majorList.map((major: any) => ({
                        majorId: major.majorId,
                        majorName: major.majorName
                    }))
                }));
                setFaculties(formattedData);
            } catch (error) {
                console.error('Error fetching faculties:', error);
            }
        };
    
        fetchFaculties();
    }, []);

    const handleFacultyChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const facultyId = e.target.value;
        setSelectedFaculty(facultyId);
        
        const selectedFaculty = faculties.find(faculty => faculty.facultyId === facultyId);
        if (selectedFaculty) {
            setMajors(selectedFaculty.majorList);
        } else {
            setMajors([]);
        }
    }; 

    const handleMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMajor(e.target.value);
    };    

    const handleInputChange = (key: string, value: string) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, value);
        }
    };

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        let newErrors: string[] = [];

        try {
            const participant = {
                name: name,
                faculty: faculty,
                major: major,
                batch: batch.toString(),
                phoneNumber: phoneNumber
            };
    
            // const formData = new FormData();
            // formData.append('participant', new Blob([JSON.stringify(participant)], { type: 'application/json' }));

            const formData = new FormData();
            for (const [key, value] of Object.entries(participant)) {
              formData.append(key, value);
            }

            if (imageFile) {
                formData.append('image', imageFile);
            }

            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken: any = jwtDecode(token);
                const userId = decodedToken.userId;
                console.log('Token:', token);
                console.log('Decoded Token:', decodedToken);

                const response = await fetch(`https://backend-production-fd6d.up.railway.app/api/tournaments/${tournamentId}/register/${userId}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                });

                const data = await response.json();
                if (response.ok) {
                    setShowModal(true);
                    sessionStorage.removeItem('name');
                    sessionStorage.removeItem('faculty');
                    sessionStorage.removeItem('major');
                    sessionStorage.removeItem('batch');
                    sessionStorage.removeItem('phoneNumber');
                } else {
                    setErrors([data.message]);
                    console.error('Server responded with error:', response.status);
                }
            }
        } catch (error) {
            console.error('Register failed:', error);
            setErrors(['Registration failed. Please try again later.']);
        }
    };


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col items-center justify-center flex-grow py-4 mt-24 mb-4 w-full rsvp-background">
                <div className="bg-primary shadow-md rounded-xl w-5/6 md:w-1/2 lg:w-1/3 p-4 sm:p-6 lg:p-8">
                    <form className="space-y-6" onSubmit={handleRegister}>
                        <h3 className="text-xl font-bold text-center text-white">RSVP Mini Games</h3>


                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    handleInputChange('name', e.target.value);
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="faculty" className="block mb-2 text-sm font-medium text-gray-300">
                                Faculty
                            </label>
                            <select
                                name="faculty"
                                id="faculty"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                value={selectedFaculty}
                                onChange={handleFacultyChange}
                                required
                            >
                                <option value="" disabled>Select a faculty</option>
                                {faculties.map(faculty => (
                                    <option key={faculty.facultyId} value={faculty.facultyId}>
                                        {faculty.facultyName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="major" className="block mb-2 text-sm font-medium text-gray-300">
                                Major
                            </label>
                            <select
                                name="major"
                                id="major"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                value={selectedMajor}
                                onChange={handleMajorChange}
                                required
                            >
                                <option value="" disabled>Select a major</option>
                                {majors.map(major => (
                                    <option key={major.majorId} value={major.majorId}>
                                        {major.majorName}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label htmlFor="batch" className="block mb-2 text-sm font-medium text-gray-300">
                                Batch
                            </label>
                            <input
                                type="text"
                                name="batch"
                                id="batch"
                                placeholder="Batch"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                value={batch}
                                onChange={(e) => {
                                    const batchValue = Number(e.target.value);
                                    setBatch(batchValue);
                                    handleInputChange('batch', batchValue.toString());
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-300">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                    handleInputChange('phoneNumber', e.target.value);
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="imageFile" className="block mb-2 text-sm font-medium text-gray-300">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                name="imageFile"
                                id="imageFile"
                                className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                required
                            />
                        </div>

                        <div className="space-y-3">
                            <button
                                type="submit"
                                className="w-full text-white bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>

                {showModal && (
                    <div id="successModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                        <div className="relative p-4 w-full max-w-md">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                    <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Success</span>
                                </div>
                                <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Register successful!</p>
                                <button onClick={() => router.push('/')} type="button" className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Suspense>   
  );
};

export default RsvpForm;