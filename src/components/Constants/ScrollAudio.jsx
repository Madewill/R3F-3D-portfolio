import { useEffect, useRef } from "react";
import { useState } from "react";

// ScrollAudio component that plays the provided audio URL when isPlaying is true
const ScrollAudio = ({ audioUrls, currentSection }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audioUrls[currentSection]) {
            audio.src = audioUrls[currentSection];
            audio.play().catch((error) => {
                // Handle audio playback error
                console.error("Audio playback error:", error);
            });
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audioUrls, currentSection]);

    return <audio ref={audioRef} preload="auto" />;
};

const MyComponent = () => {
    const [currentSection, setCurrentSection] = useState(0);

    // Define audio URLs for each section
    const audioUrls = [
        "/sounds/scroll1.wav",
        "/sounds/land.mp3",
        "/sounds/teleport.mp3",
        // Add more audio URLs for additional sections
    ];

    return (
        <div>
            {/* Render your sections */}
            <ScrollAudio audioUrls={audioUrls} currentSection={currentSection} />
            {/* Add other sections */}
        </div>
    );
};

export default MyComponent;
