"use client"

import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

type Props = {
  icon: unknown;
  color?: string;
  size: number;
  loopPlay?: boolean;
};

export default function LottieIcon({ icon, color, size, loopPlay = false }: Props) {
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
}