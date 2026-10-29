'use client';
import { useEffect } from 'react';

export default function ClickSoundListener() {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a');

      if (button) {
        const audio = new Audio('/click.mp3');
        audio.volume = 0.4;
        audio.play().catch((error) => {
          console.log("Audio play blocked:", error);
        });
      }
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return null;
}