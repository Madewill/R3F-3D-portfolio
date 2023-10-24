import React from "react";

export function PageUp() {
    return (
        <a href="#top-section">
            <button
                className="z-20 flex items-center justify-center absolute bottom-4 right-[15px] md:bottom-12 md:right-[50px] p-3 bg-indigo-600 w-11 h-11 rounded-md"
            >
                <i className="ri-arrow-up-circle-fill text-white text-3xl"></i>
            </button>
        </a>
    );
}
