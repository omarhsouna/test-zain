const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            rubik: ["Rubik"],
            "work-sans": ["Work Sans"],
        },
        extend: {
            fontFamily: {
                sans: ["Work Sans", "Rubik", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                32: "32px",
            },
            colors: {
                blue: "#1B31A8",
                "blue-light": "#0079FF",
                gray: "#4D6475",
                border: "#E9EEF2",
                input: "#708797",
                background: "#F4F8FA",
            },
            boxShadow: {
                box: "0px 16px 32px rgba(30, 42, 50, 0.08)",
            },
            width: {
                360: "360px",
                560: "560px",
                "56/100": "56%",
            },
            padding: {
                4.5: "18px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
