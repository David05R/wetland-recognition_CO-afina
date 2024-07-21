"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MapIcon, WavesIcon } from "lucide-react";


const Selectors = () => {
  const [country, setCountry] = useState(null);
  const [wetland, setWetland] = useState(null);

  const handleCountryChange = event => {
    setCountry(event.target.textContent);
  };

  return (
    <div className="w-full flex flex-row absolute z-10">
      <div id="country-wetlandContainer" className="flex gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center bg-primary-container-dark h-10 font-poppins font-semibold text-on-primary-container-dark pl-4 pr-6 gap-x-2 outline-none rounded-full">
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


        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center bg-surface-container-low-dark h-10 font-poppins font-semibold text-on-primary-container-dark pl-4 pr-6 gap-x-2 outline-none rounded-full">
            <WavesIcon />
            {wetland == null
              ? <span>Humedales</span>
              : <span>
                  {setWetland}
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
      </div>
    </div>
  );
};

export default Selectors;
