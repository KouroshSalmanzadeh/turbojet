"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import web from '@/assets/icons/lotties/web.json';
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

export default function WebLottieIcon () {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            playerRef.current?.playFromBeginning();
        }
    }, []);

    const handleComplete = () => {
        if (typeof window !== 'undefined') {
            playerRef.current?.playFromBeginning();
        }
    };

    return (
        <Player
            ref={playerRef}
            icon={web}
            size={150}
            colorize={"var(--secondary-light-color)"}
            onComplete={handleComplete}
        />
    );
};