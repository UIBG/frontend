'use client';

import React, {useState} from "react";
import {router} from "next/client";
import {useRouter} from "next/navigation";

const SelectMainTournament = () => {
    const [selectedTournament, setSelectedTournament] = useState<string | null>(null);
    const tournaments = ["Valorant", "Lokapala", "Mobile Legend", "PUBG Mobile"];
    const router = useRouter();

    const handleTournamentSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTournament(event.target.value);
    };

    const handleNext = () => {
        if (selectedTournament) {
            router.push(`/tournament/game-page?tournamentName=${selectedTournament}`);
        } else {
            alert('Please select a tournament');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow py-4 mt-24 mb-4 w-full rsvp-background">
            <div className="bg-primary shadow-md rounded-xl w-5/6 md:w-1/2 lg:w-1/3 p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold text-center text-white mb-6">Pilih Tournament</h3>
                <form className="space-y-6">
                    {tournaments.map((tournament) => (
                        <div key={tournament} className="flex items-center">
                            <input
                                id={tournament}
                                name="tournament"
                                type="radio"
                                value={tournament}
                                checked={selectedTournament === tournament}
                                onChange={handleTournamentSelection}
                                className="w-4 h-4 text-blue_primary bg-gray-100 border-gray-300 focus:ring-blue_primary focus:ring-2"
                            />
                            <label htmlFor={tournament} className="ml-2 text-lg font-medium text-gray-300">
                                {tournament}
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

}

export default SelectMainTournament;