import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen justify-centerflex flex-col bg-background-dark overflow-hidden">
      <div className="absolute flex flex-col items-start top-10 left-10 z-10">
        <h1 className="font-poppins font-semibold text-white text-5xl max-w-[60svw]">
          Te damos la bienvenida al prototipo de Wetlands.io
        </h1>
        <Link href="/map">
          <div className="bg-white text-primary mt-6 px-6 w-fit h-11 flex items-center rounded-full font-poppins">
            Inicia Wetlands.io
          </div>
        </Link>
      </div>
      <Image
        src={"/wetland.webp"}
        width={1920}
        height={1080}
        className="absolute w-full h-full z-0 opacity-40"
        alt="picture background"
      />
      <h2 className="absolute right-6 bottom-6 font-poppins text-xl text-white">Creada con ❤️ por el equipo Aurora.</h2>
    </main>
  );
}
