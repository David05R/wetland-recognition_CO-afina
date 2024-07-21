import { HomeIcon, MapIcon } from "lucide-react";
import Link from "next/link";

const NavRail = () => {
  return (
    <div className="w-full h-full bg-surface-dark flex flex-col items-center pt-4">
      <Link href={'/'}>
        <div id="brandContainer" className="w-14 h-14 flex items-center justify-center bg-tertiary-container-dark rounded-lg">
          <HomeIcon className="text-on-tertiary-container-dark"/>
        </div>
      </Link>
      <div id="navLinksContainer" className="pt-4">
        <Link href={`/map`}>
          <div className="flex flex-col w-full h-fit justify-center items-center p-3">
            <div className="w-14 h-8 bg-secondary-container-dark mb-1 rounded-full flex items-center justify-center">
              <MapIcon className="text-on-secondary-container-dark" size={24} />
            </div>
            <span className="text-sm text-center text-on-surface-dark">
              Mapa
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavRail;
