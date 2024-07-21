import React from "react";

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('humedal.jpg')`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-24">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-7 flex justify-between items-center">
          <div className="text-xl font-bold">WetLand.io</div>
          <div className="flex items-center justify-center">
            <a href="#" className="px-4 text-lg">
              Mapa
            </a>
            <a href="#" className="px-4 text-lg">
              Vista general
            </a>
            <a href="#" className="px-4 text-lg">
              Conoce más
            </a>
          </div>
          <button className="ml-4 px-4 py-2 text-lg font-semibold text-black bg-white rounded-2xl hover:bg-gray-300">
            Accede ahora
          </button>
        </nav>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-left mb-4">
          Un acercamiento a los <br />
          <span className="text-green-200">humedales</span> <br />
          desde la web
        </h1>

        {/* Call to Action Button */}
        <button className="px-4 py-2 mt-4 text-lg font-semibold text-black bg-white rounded-2xl hover:bg-gray-300">
          Accede ahora
        </button>
      </div>
    </main>
  );
}
