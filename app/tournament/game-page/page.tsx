'use client';
import React from "react";
import SuspenseWrapper from "@/components/tournament/suspense-wrapper";
import TeamForm from "@/components/tournament/team-form";

const Game: React.FC = () => {
    return (
        <SuspenseWrapper>
            <TeamForm/>
        </SuspenseWrapper>
    );
};

export default Game;