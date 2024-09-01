'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SelectTournament = () => {
    const [selectedTournament, setSelectedTournament] = useState<string | null>(null);
    const [tournaments, setTournaments] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
        } else {
            fetchTournaments(token);
        }
    }, []);

    const fetchTournaments = async (token: string) => {
        try {
            const response = await fetch('https://backend-production-fd6d.up.railway.app/api/tournaments', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch tournaments');
            }
            const data = await response.json();
            console.log('Fetched Tournaments:', data);
            setTournaments(data);
        } catch (error) {
            console.error('Error fetching tournaments:', error);
        }
    };

    const handleTournamentSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTournament(event.target.value);
    };

    const handleNext = () => {
        if (selectedTournament) {
            router.push(`/event/mini-games-faculty/rsvp?tournamentId=${selectedTournament}`);
        } else {
            alert('Please select a tournament');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow py-4 mt-24 mb-4 w-full rsvp-background">
            <div className="bg-primary shadow-md rounded-xl w-5/6 md:w-1/2 lg:w-1/3 p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-center text-white mb-6">Select Tournament</h3>
                <form className="space-y-6">
                    {tournaments.map((tournament) => (
                        <div key={tournament.id} className="flex items-center">
                            <input
                                id={tournament.id}
                                name="tournament"
                                type="radio"
                                value={tournament.id}
                                checked={selectedTournament === tournament.id}
                                onChange={handleTournamentSelection}
                                className="w-4 h-4 text-blue_primary bg-gray-100 border-gray-300 focus:ring-blue_primary focus:ring-2"
                            />
                            <label htmlFor={tournament.id} className="ml-2 text-lg font-medium text-gray-300">
                                {tournament.name}
                            </label>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="w-full text-white bg-blue_primary hover:bg-blue_secondary focus:ring-4 focus:ring-blue_tertiary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SelectTournament;
