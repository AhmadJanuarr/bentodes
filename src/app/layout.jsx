import localFont from "next/font/local";
import "./globals.css";
import AppShell from "@/components/Layout/AppShell";
import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
    variable: "--font-source-sans",
});

const SourceSerif4Regular = localFont({
    src: "../fonts/source-serif-4/SourceSerif4_Regular.ttf",
    variable: "--font-source-serif-4-regular",
    weight: "400",
    display: "swap",
});
const SourceSerif4SemiBold = localFont({
    src: "../fonts/source-serif-4/SourceSerif4_SemiBold.ttf",
    variable: "--font-source-serif-4-semibold",
    weight: "600",
    display: "swap",
});
const SourceSerif4Bold = localFont({
    src: "../fonts/source-serif-4/SourceSerif4_Bold.ttf",
    variable: "--font-source-serif-4-bold",
    weight: "700",
    display: "swap",
});
const SourceSerifProRegular = localFont({
    src: "../fonts/source-serif-pro/SourceSerifPro_Regular.ttf",
    variable: "--font-source-serif-pro-regular",
    weight: "400",
    display: "swap",
});
const SourceSerifProSemiBold = localFont({
    src: "../fonts/source-serif-pro/SourceSerifPro_SemiBold.ttf",
    variable: "--font-source-serif-pro-semibold",
    weight: "600",
    display: "swap",
});
const SourceSerifProBold = localFont({
    src: "../fonts/source-serif-pro/SourceSerifPro_Bold.ttf",
    variable: "--font-source-serif-pro-bold",
    weight: "700",
    display: "swap",
});

const fontVariables = [
    SourceSerif4Regular.variable,
    SourceSerif4SemiBold.variable,
    SourceSerif4Bold.variable,
    SourceSerifProRegular.variable,
    SourceSerifProSemiBold.variable,
    SourceSerifProBold.variable,
].join(" ");

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased ${fontVariables} ${sourceSans3.variable}`}>
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
}
