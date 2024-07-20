import { Poppins, Manrope } from "next/font/google";

export const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    variable: '--font-poppins',
    subsets: ['latin'],
})

export const manrope = Manrope({
    weight: ["400", "500"],
    variable: '--font-manrope',
    subsets: ['latin'],
})
