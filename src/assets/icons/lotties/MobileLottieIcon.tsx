"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mobile from '@/assets/icons/lotties/mobile.json';
import { useRef } from 'react';
import { Player } from '@lordicon/react';

export default function MobileLottieIcon () {
    const playerRef = useRef<Player>(null);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         playerRef.current?.playFromBeginning();
    //     }
    // }, []);

    // const handleComplete = () => {
    //     if (typeof window !== 'undefined') {
    //         playerRef.current?.playFromBeginning();
    //     }
    // };

    return (
        <Player
            ref={playerRef}
            icon={mobile}
            size={150}
            colorize={"var(--primary-color)"}
            // onComplete={handleComplete}
        />
    );
};