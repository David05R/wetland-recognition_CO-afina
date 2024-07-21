import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen min-h-screen items-center justify-center flex flex-col">
      <h1 className="font-poppins font-semibold text-primary text-4xl">
        Te damos la bienvenida al prototipo de Wetlands.io
      </h1>
      <Link href="/map">
        <div className="bg-primary text-on-primary mt-2 px-6 h-11 flex items-center rounded-full">Inicia Wetlands.io</div>
      </Link>
    </main>
  );
}
