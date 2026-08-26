import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Soft Radial Cyan */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[140px]" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      
      {/* Center Right Soft Radial Violet */}
      <div 
        className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-violet-600/[0.04] blur-[160px]" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Bottom Left Soft Radial Blue */}
      <div 
        className="absolute bottom-10 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-600/[0.035] blur-[180px]" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      {/* Subtle Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />
    </div>
  );
}
