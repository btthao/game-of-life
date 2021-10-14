module.exports = {
    important: true,
    // mode: "jit",
    purge: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                bowlby: ["Bowlby One SC", "mono"],
            },
            gridTemplateColumns: {
                100: "repeat(100, 18px)",
            },
            height: {
                "100vw": "100vw",
                square: "18px",
            },
            width: {
                square: "18px",
            },
            maxHeight: {
                "35rem": "35rem",
            },
            maxWidth: {
                "3xl": "1800px",
            },
            borderWidth: {
                0.5: "0.5px",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
        },
    },
    plugins: [],
};