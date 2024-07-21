import { poppins, manrope } from "./fonts";
import "./globals.css";
import "@/app/globalicons.css"

export const metadata = {
  title: "Weland.io | Acercate a los humedales desde la web",
  description: "Wenland.io es la respuesta del semillero de astronomia de la Universidad Tecnologica de bolivar, al reto propuesto en el hackathon CoAfina 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
