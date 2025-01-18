"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import rocket from '@/assets/icons/lotties/rocket.json';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Player } from '@lordicon/react';

const RocketLottieIcon = () => {
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
            icon={rocket}
            size={150}
            colorize={"var(--secondary-light-color)"}
            onComplete={handleComplete}
        />
    );
};

export default dynamic(() => Promise.resolve(RocketLottieIcon), {
    ssr: false,
});
