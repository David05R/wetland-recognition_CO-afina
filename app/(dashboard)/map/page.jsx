"use client";
import { useState } from "react";
import MapVis from "@/components/dashboard/mapvis";
import Selectors from "@/components/dashboard/selectors";

const Page = () => {
  const [mapView, setMapView] = useState("Navigation");

  const handleMapViewChange = view => setMapView(view);
  console.log(mapView);

  return (
    <div className="w-full relative">
      <Selectors onViewChange={handleMapViewChange} />
      <MapVis view={mapView} />
    </div>
  );
};

export default Page;
