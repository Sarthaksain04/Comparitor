// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const WaveButton = ({ size = 32 }) => {
//   const [isActive, setIsActive] = useState(false);

//   // Path definitions
//   const flatPath = "M 20 50 L 80 50";
//   // The "base" wave
//   const wavePath = "M 20 50 C 30 20, 40 80, 50 50 C 60 20, 70 80, 80 50";
//   // A slightly shifted wave for the "vibration" effect
//   const wavePathAlt = "M 20 50 C 30 30, 40 70, 50 50 C 60 30, 70 70, 80 50";

//   return (
//     <motion.button
//       onTap={() => setIsActive(!isActive)}
//       animate={{
//         backgroundColor: isActive ? "#2563eb" : "#e5e7eb",
//       }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       style={{
//         width: `${size}px`,
//         height: `${size}px`,
//         borderRadius: '50%',
//         border: 'none',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 0,
//         outline: 'none',
//         flexShrink: 0,
//       }}
//     >
//       <svg viewBox="0 0 100 100" width="65%" height="65%">
//         <motion.path
//           fill="transparent"
//           stroke={isActive ? "white" : "black"}
//           strokeWidth="12"
//           strokeLinecap="round"
//           // Logic: If active, animate between two wave shapes. If not, stay flat.
//           animate={{
//             d: isActive ? [wavePath, wavePathAlt, wavePath] : flatPath
//           }}
//           transition={{
//             d: isActive 
//               ? { 
//                   duration: 0.6, 
//                   repeat: Infinity, 
//                   ease: "easeInOut" 
//                 } 
//               : { 
//                   type: "spring", 
//                   stiffness: 500, 
//                   damping: 15 
//                 }
//           }}
//         />
//       </svg>
//     </motion.button>
//   );
// };

// export default WaveButton;

import  { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const WaveButton = ({ size = 32 }) => {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Paths
  const flatPath = "M 20 50 L 80 50";
  const wavePath = "M 20 50 C 30 20, 40 80, 50 50 C 60 20, 70 80, 80 50";
  const wavePathAlt = "M 20 50 C 30 30, 40 70, 50 50 C 60 30, 70 70, 80 50";

  // Handle audio play / pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isActive) {
      audioRef.current.volume = 0.25; // soothing, not loud
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isActive]);

  return (
    <>
      {/* 🔊 Background Audio */}
      <audio ref={audioRef} src="src\assets\soothing.mp3" preload="auto" />

      <motion.button
        onTap={() => setIsActive(!isActive)}
        animate={{
          backgroundColor: isActive ? "#2563eb" : "#e5e7eb",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          outline: 'none',
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 100 100" width="65%" height="65%">
          <motion.path
            fill="transparent"
            stroke={isActive ? "white" : "black"}
            strokeWidth="12"
            strokeLinecap="round"
            animate={{
              d: isActive ? [wavePath, wavePathAlt, wavePath] : flatPath
            }}
            transition={{
              d: isActive
                ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
                : { type: "spring", stiffness: 500, damping: 15 }
            }}
          />
        </svg>
      </motion.button>
    </>
    
  );
};

export default WaveButton;
