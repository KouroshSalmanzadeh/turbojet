"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Player } from '@lordicon/react';

type Props = {
  icon: unknown;
  color?: string;
  size: number;
  loopPlay?: boolean;
};

const LottieIcon = ({ icon, color, size, loopPlay = false }: Props) => {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  const handleComplete = () => {
    if (loopPlay) {
      playerRef.current?.playFromBeginning();
    }
  };

  return (
    <Player
      ref={playerRef}
      icon={icon}
      size={size}
      colorize={color}
      onComplete={loopPlay ? handleComplete : undefined} // تابع شرطی
    />
  );
};

export default dynamic(() => Promise.resolve(LottieIcon), {
  ssr: false,
});