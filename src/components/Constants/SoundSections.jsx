import { useEffect, useRef } from "react";

const SoundSection = (props) => {
    const { sectionTitle, soundFile, children } = props;
    const audioRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    audioRef.current.play();
                } else {
                    // Pause the audio when it's not in the viewport
                    audioRef.current.pause();
                }
            },
            options
        );

        observer.observe(document.getElementById(sectionTitle));

        // Cleanup the observer when the component unmounts
        return () => observer.disconnect();
    }, [sectionTitle, soundFile]);

    return (
        <section id={sectionTitle} className="h-screen w-screen p-8 max-w-screen-2xl mx-auto">
            <audio ref={audioRef} src={soundFile} />
            {children}
        </section>
    );
};

export default SoundSection;
