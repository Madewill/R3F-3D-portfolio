import React, { useState } from "react";

export function Logo(props) {
    const { currentSection } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (currentSection !== 1) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleTouchStart = () => {
        if (currentSection !== 1) {
            setIsHovered(true);
        }
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };

    const logoStyle = {
        width: "40px",
        height: "40px",
        transform: `scale(${isHovered ? 1.2 : 1})`,
        transition: "transform 0.5s",
        fill: isHovered ? "white" : "#4f46e5",
        cursor: currentSection === 1 ? "default" : "pointer",
    };

    return (
        <div className="block md:block"> {/* Hidden on small screens, visible on medium and larger */}
            <div
                className={`w-[40px] sm:w-[15px] z-200 absolute top-4 left-4 md:top-12 md:left-[28px]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1250 1226"
                    style={logoStyle}
                >
                    <path
                        fill={isHovered ? "white" : "#4f46e5"}
                        fillRule="evenodd"
                        d="M805.59,1051.06a487.18,487.18,0,0,1-146.43,33.48V1226a631.73,631.73,0,0,0,146.43-25.31c248.43-73.87,431.58-294.86,443.77-559.4.48-9.43.64-18.86.64-28.29a606.91,606.91,0,0,0-11.07-115.21C1195.31,272.55,1026.27,90.85,805.59,25.31A640.59,640.59,0,0,0,659.16,0V928.46H805.59V641.29h299.59C1094,827.08,973.34,983.94,805.59,1051.06Zm0-876.12C946.40,231.21,1054,351,1091.54,497.79H805.59Z"
                    />
                    <path
                        fill={isHovered ? "white" : "#4f46e5"}
                        fillRule="evenodd"
                        d="M444.41,1051.06a487.18,487.18,0,0,0,146.43,33.48V1226a633.51,633.51,0,0,1-146.43-25.31C196,1126.82,12.83,905.83,.64,641.29.32,631.86,0,622.43,0,613a606.91,606.91,0,0,1,11.07-115.21C54.69,272.55,223.89,90.85,444.41,25.31A641.77,641.77,0,0,1,590.84,0V928.46H444.41V641.29H145c11.07,185.79,131.68,342.65,299.43,409.77Zm0-876.12C303.60,231.21,196,351,158.46,497.79h286Z"
                    />
                </svg>
            </div>
        </div>
    );
}
