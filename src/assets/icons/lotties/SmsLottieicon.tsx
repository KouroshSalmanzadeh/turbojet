"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import sms from '@/assets/icons/lotties/sms.json';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Player } from '@lordicon/react';

const SmsLottieIcon = () => {
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
            icon={sms}
            size={150}
            colorize={"var(--primary-color)"}
            // onComplete={handleComplete}
        />
    );
};

export default dynamic(() => Promise.resolve(SmsLottieIcon), {
    ssr: false,
});
