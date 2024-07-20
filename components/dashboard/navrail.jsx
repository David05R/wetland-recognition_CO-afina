import Link from "next/link";

const NavRail = () => {
  return (
    <div className="w-full h-full bg-surface-dark">
      <div id="brandContainer" />
      <div id="navLinksContainer">
        <Link href={`/map`}>
          <div className="flex flex-col w-full h-fit justify-center items-center p-3">
            <div className="w-14 h-8 bg-secondary-container-dark mb-1 rounded-full" />
            <span className="text-sm text-center text-on-surface-dark">
              Mapa
            </span>
          </div>
        </Link>
        <Link href={`/overview`}>
          <div className="flex flex-col w-full h-fit justify-center items-center p-3">
            <div className="w-14 h-8 bg-secondary-container-dark mb-1 rounded-full" />
            <span className="text-sm text-center text-on-surface-dark">
              Overview
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavRail;
