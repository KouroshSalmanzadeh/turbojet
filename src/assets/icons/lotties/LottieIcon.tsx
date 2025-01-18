"use client";

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Player } from '@lordicon/react';

type Props = {
  icon: unknown;
  color?: string;
  size: number;
  loopPlay?: boolean;
};

const LottieIcon = ({ icon, color, size }: Props) => {
  const playerRef = useRef<Player>(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     playerRef.current?.playFromBeginning();
  //   }
  // }, []);

  // const handleComplete = () => {
  //   if (loopPlay && typeof window !== 'undefined') {
  //     playerRef.current?.playFromBeginning();
  //   }
  // };

  return (
    <Player
      ref={playerRef}
      icon={icon}
      size={size}
      colorize={color}
      // onComplete={loopPlay ? handleComplete : undefined}
    />
  );
};

export default dynamic(() => Promise.resolve(LottieIcon), {
  ssr: false,
});
