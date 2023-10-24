const DownloadResume = () => {
    const downloadLink = "/Ayomide Adejumo.pdf"; // Replace with the actual path to your PDF file.

    const paragraphStyle = {
        color: "gray",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "15px",
        left: "140px",
        marginLeft: "8px", // For medium-sized screens (md:left-8)
    };

    return (
        <div>
            <a className="font-semibold text-gray-500 absolute bottom-[70px]" href={downloadLink} download="Ayo-Adejumo Resume.pdf">
                Click to download Resume
                <hr className="mb-2" />
            </a>
        </div>
    );
};

export default DownloadResume;
