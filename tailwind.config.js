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
                bowlby: ['"Bowlby One SC"', "Helvetica", "Arial", "sans-serif"],
            },
            height: {
                "100vw": "100vw",
            },
            maxHeight: {
                "35rem": "35rem",
            },
            maxWidth: {
                "3xl": "1800px",
            },
            minWidth: {
                sm: "500px",
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