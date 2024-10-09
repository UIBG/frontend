'use client';
import React, { useEffect, useState, Suspense } from "react";
import {useSearchParams} from "next/navigation";
import {router} from "next/client";
import {jwtDecode} from "jwt-decode";
import {read} from "node:fs";

const TeamForm = () => {
    const [teamName, setTeamName] = useState('');
    const [schoolOrigin, setSchool] = useState('');
    const [hsOrUni, setHsOrUni] = useState('');
    const [captainName, setCaptainName] = useState('');
    const [captainWaNumber, setCaptainWaNumber] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);
    const searchParams = useSearchParams();

    const tournamentName = searchParams.get('tournament');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);  // Store the selected file

            // Redirect the user to the backend authentication endpoint
            window.location.href = 'http://localhost:8080/authorize';
        }
    };



    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTeamName(sessionStorage.getItem('teamName') || '');
            setSchool(sessionStorage.getItem('school') || '');
            setHsOrUni(sessionStorage.getItem('hsOrUni') || '');
            setCaptainName(sessionStorage.getItem('captainName') || '');
            setCaptainWaNumber(sessionStorage.getItem('captainWaNumber') || '');
        }
    }, []);

    const handleInputChange = (key: string, value: string) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, value);
        }
    };

    const handleTeamRegistration = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('User is not authenticated');
            }

            // First step: Team registration
            const response = await fetch('http://localhost:8080/api/teams/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: teamName,
                    schoolOrigin: schoolOrigin,
                    hsOrUni: hsOrUni,
                    captainName: captainName,
                    captainWaNumber: captainWaNumber,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to register team');
            }

            const data = await response.json();
            console.log('Team Registration Successful:', data);
            alert('Team registration successful');

            // Second step: File upload
            if (file) {
                const formData = new FormData();
                formData.append('file', file);  // Attach the file selected by the user

                const uploadResponse = await fetch('http://localhost:8080/api/drive/upload', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${authToken}`,  // Use the token obtained earlier
                    },
                    body: formData,
                });

                if (!uploadResponse.ok) {
                    throw new Error('Failed to upload file');
                }

                const uploadData = await uploadResponse.json();
                console.log('File uploaded successfully:', uploadData);
                alert('File uploaded successfully');
            } else {
                alert('No file selected for upload');
            }

            // Redirect after successful registration and upload
            await router.push('/');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to register team or upload file');
        }
    };


        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div
                    className="flex flex-col items-center justify-center flex-grow py-4 mt-24 mb-4 w-full rsvp-background">
                    <div className="bg-primary shadow-md rounded-xl w-5/6 md:w-1/2 lg:w-1/3 p-4 sm:p-6 lg:p-8">
                        <form className="space-y-6" onSubmit={handleTeamRegistration}>
                            <h3 className="text-xl font-bold text-center text-white">Registrasi {tournamentName}</h3>

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                                    Nama Tim
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    placeholder="Nama Tim"
                                    value={teamName}
                                    onChange={(e) => {
                                        setTeamName(e.target.value);
                                        handleInputChange('name', e.target.value);
                                    }}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="fileUpload" className="block mb-2 text-sm font-medium text-gray-300">
                                    Upload File to Google Drive
                                </label>
                                <input
                                    type="file"
                                    id="fileUpload"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    onChange={handleFileChange}  // Trigger authentication and store the file
                                />
                            </div>

                            <div>
                                <label htmlFor="school" className="block mb-2 text-sm font-medium text-gray-300">
                                    Asal Sekolah
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    placeholder="Asal Sekolah"
                                    value={schoolOrigin}
                                    onChange={(e) => {
                                        setSchool(e.target.value);
                                        handleInputChange('schoolOrigin', e.target.value);
                                    }}
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="hsOrUni" className="block mb-2 text-sm font-medium text-gray-300">
                                    Dari SMA atau Universitas:
                                </label>
                                <select
                                    name="major"
                                    id="major"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    onChange={(e) => {
                                        setHsOrUni(e.target.value);
                                        handleInputChange('hsOrUni', e.target.value); // Save the selected value in session storage
                                    }}
                                    required
                                >
                                    <option value="" disabled>Pilih SMA atau Universitas</option>
                                    <option value="SMA">SMA</option>
                                    <option value="Universitas">Universitas</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="captainName" className="block mb-2 text-sm font-medium text-gray-300">
                                    Nama Kapten
                                </label>
                                <input
                                    type="text"
                                    name="captainName"
                                    id="captainName"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    placeholder="Nama Kapten"
                                    value={captainName}
                                    onChange={(e) => {
                                        setCaptainName(e.target.value);
                                        handleInputChange('captainName', e.target.value);
                                    }}
                                    required
                                />

                            </div>
                            <div>
                                <label htmlFor="captainWaNumber"
                                       className="block mb-2 text-sm font-medium text-gray-300">
                                    Nomor WhatsApp Kapten
                                </label>
                                <input
                                    type="text"
                                    name="captainWaNumber"
                                    id="captainWaNumber"
                                    className="bg-gray-600 border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm p-2.5 placeholder-gray-400"
                                    placeholder="Nomor WhatsApp Kapten"
                                    value={captainWaNumber}
                                    onChange={(e) => {
                                        setCaptainWaNumber(e.target.value);
                                        handleInputChange('captainWaNumber', e.target.value);
                                    }}
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue_primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Suspense>
        );
}

export default TeamForm;