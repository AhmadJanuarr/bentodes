/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: { min: "640px" },
                md: { min: "768px" },
                lg: { min: "1280px" },
                xl: { min: "1536px" },
            },
            fontFamily: {
                sourceSerifRegular: [`var(--font-source-serif-4-regular)`],
                sourceSerifSemiBold: [`var(--font-source-serif-4-semibold)`],
                sourceSerifBold: [`var(--font-source-serif-4-bold)`],
                sourceSerifProRegular: [`var(--font-source-serif-pro-regular)`],
                sourceSerifProSemiBold: [`var(--font-source-serif-pro-semibold)`],
                sourceSerifProBold: [`var(--font-source-serif-pro-bold)`],
                sourceSans: [`var(--font-source-sans)`],
            },
            colors: {
                primary: "#343434",
                secondary: "#FF7F0F",
            },
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
