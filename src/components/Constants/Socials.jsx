import React from "react";

const socialMediaLinks = [
    {
        platform: "LinkedIn",
        icon: "ri-linkedin-box-fill",
        url: "https://www.linkedin.com/in/ayomide-adejumo-91bbb0238/",
    },
    {
        platform: "GitHub",
        icon: "ri-github-fill",
        url: "https://github.com/Madewill",
    },
    {
        platform: "Twitter",
        icon: "ri-twitter-fill",
        url: "https://twitter.com/AyomideAdejumo6",
    },
    {
        platform: "Behance",
        icon: "ri-behance-fill",
        url: "https://www.behance.net/ayomideadejumo",
    },
];

const SocialMediaIcons = ({ icons }) => {
    return (
        <div className="flex space-x-4">
            {icons.map((icon, index) => (
                <a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 cursor-pointer text-[25px]"
                >
                    <i className={icon.icon}></i>
                </a>
            ))}
        </div>
    );
};

const Socials = () => {
    return (
        <div className="mt-20">
            <h1 className="font-semibold text-gray-500">Connect with me:</h1>
            <hr className="mb-2" />
            <SocialMediaIcons icons={socialMediaLinks} />
        </div>
    );
};

export default Socials;
