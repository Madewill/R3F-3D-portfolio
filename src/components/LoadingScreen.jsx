import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  // Defines a custom clip path to animate text clipping
  const clipPath = `inset(0px ${100 - progress}% 0px 0px)`; 
  // const clipPath = `inset(0px ${50 - progress / 2}% 0px ${50 - progress / 2}%)`; 
  // // const clipPath = `inset(${100 - progress}% 0px 0px 0px)`;
 




  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
        <div
          className="absolute left-0 top-0 overflow-hidden truncate transition-all duration-500"
          style={{
            clipPath: clipPath, // Apply the custom clip path
          }}
        >
          Ayomide Adejumo
        </div>
        <div className="opacity-40">Ayomide Adejumo</div>
      </div>
    </div>
  );
};
