import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const BackgroundEffect: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bgDark">
      {/* Dynamic mouse glow spotlight (very soft in light mode) */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.04), rgba(8, 145, 178, 0.02) 40%, transparent 80%)`,
        }}
      />

      {/* Grid Pattern Overlay (slate gray lines in light mode) */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />

      {/* Ambient background blur circles (extremely faint for light mode) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accentIndigo/3 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accentPurple/2 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accentCyan/2 blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
};
