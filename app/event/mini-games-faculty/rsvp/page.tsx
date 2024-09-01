'use client';
import React from "react";
import SuspenseWrapper from "@/components/event/mini-games-faculty/rsvp/suspense-wrapper";
import RsvpForm from "@/components/event/mini-games-faculty/rsvp/rsvp-form";

const Rsvp: React.FC = () => {
    return (
        <SuspenseWrapper>
            <RsvpForm />
        </SuspenseWrapper>
    );
};

export default Rsvp;