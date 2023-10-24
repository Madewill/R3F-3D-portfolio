import React, { useState, useEffect } from "react";

function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);
    const [secondAudio, setSecondAudio] = useState(null);
    const [isBothAudioPlaying, setIsBothAudioPlaying] = useState(false);

    const sound = "/sounds/typing.wav"; // Path for the main audio
    const secondSound = "/sounds/Bgtrack.mp3"; // Path for the second audio

    useEffect(() => {
        if (audio) {
            if (isPlaying) {
                audio.loop = true;
                audio.removeEventListener("ended", handleAudioEnded);
                audio.addEventListener("ended", handleAudioEnded);
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }, [audio, isPlaying]);

    useEffect(() => {
        if (secondAudio) {
            secondAudio.volume = 0.1; // Adjust the volume here (0.1 for 10%)
            secondAudio.loop = true;
            secondAudio.removeEventListener("ended", handleAudioEnded);
            secondAudio.addEventListener("ended", handleAudioEnded);
            if (isBothAudioPlaying) {
                secondAudio.play();
            } else {
                secondAudio.pause();
            }
        }
    }, [secondAudio, isBothAudioPlaying]);

    const handleAudioEnded = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
        if (secondAudio) {
            secondAudio.currentTime = 0;
            if (isBothAudioPlaying) {
                secondAudio.play();
            }
        }
    };

    const toggleAudio = () => {
        setIsBothAudioPlaying((prevState) => !prevState);
        setIsPlaying((prevState) => !prevState);
    };

    useEffect(() => {
        const newAudio = new Audio(sound);
        setAudio(newAudio);
    }, [sound]);

    useEffect(() => {
        const newSecondAudio = new Audio(secondSound);
        setSecondAudio(newSecondAudio);
    }, [secondSound]);

    return (
        <div>
            <button
                className="z-20 flex items-center justify-center absolute top-4 right-[70px] md:top-12 md:right-[110px] p-3 bg-indigo-600 w-11 h-11 rounded-md"
                onClick={toggleAudio}
            >
                {isPlaying ? (
                    <i className="ri-pause-circle-fill text-white text-3xl"></i>
                ) : (
                    <i className="ri-play-circle-fill text-white text-3xl"></i>
                )}
            </button>
        </div>
    );
}

export default AudioPlayer;
