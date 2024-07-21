"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MapIcon, ViewIcon, WavesIcon } from "lucide-react";

const Selectors = ({ onViewChange }) => {
  const [country, setCountry] = useState(null);
  const [wetland, setWetland] = useState(null);
  const [view, setView] = useState("Navigation");

  const handleCountryChange = event => {
    setCountry(event.target.textContent);
  };

  const handleWetlandChange = event => {
    setWetland(event.target.textContent);
  };

  const handleViewChange = () => {
    const newView = view === "Navigation" ? "Timelapse" : "Navigation";
    setView(newView);
    onViewChange(newView);
  };

  return (
    <div className="w-full flex flex-row absolute justify-between z-10 p-2">
      <div id="country-wetlandContainer" className="flex gap-x-2">
        {/* Country selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center bg-primary-container-dark h-10 font-poppins font-medium text-on-primary-container-dark pl-4 pr-6 gap-x-2 outline-none rounded-full">
            <MapIcon />
            {country == null
              ? <span>Selecciona un país</span>
              : <span>
                  {country}
                </span>}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-poppins bg-surface-dark text-on-surface-dark outline-none border-outline-variant-dark">
            <DropdownMenuItem onClick={handleCountryChange}>
              Colombia
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Venezuela (Próximamente)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Ecuador (Próximamente)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Perú (Próximamente)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Wetland selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center bg-surface-container-low-dark h-10 font-poppins font-medium text-on-primary-container-dark pl-4 pr-6 gap-x-2 outline-none rounded-full">
            <WavesIcon />
            {wetland == null
              ? <span>Humedales</span>
              : <span>
                  {wetland}
                </span>}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-poppins bg-surface-dark text-on-surface-dark outline-none border-outline-variant-dark">
            <DropdownMenuItem onClick={handleWetlandChange}>
              Colombia
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Venezuela (Próximamente)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Ecuador (Próximamente)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-on-surface-variant-dark/50 cursor-not-allowed">
              Perú (Próximamente)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div id="mapViewSelectorContainer">
        <div
          onClick={handleViewChange}
          className="bg-white text-tertiary-container-dark h-10 pl-4 pr-6 gap-x-2 flex items-center font-poppins font-medium justify-center rounded-full cursor-pointer select-none"
        >
          <ViewIcon />
          <span>
            Selector de vista:{" "}
            {view == "Navigation"
              ? <span>Navegacion</span>
              : <span>Linea de tiempo</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Selectors;
