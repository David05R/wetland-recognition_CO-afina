"use client";
import { useState, useEffect } from "react";
import MapVis from "@/components/dashboard/mapvis";
import Selectors from "@/components/dashboard/selectors";

const Page = () => {
  const [mapView, setMapView] = useState("Navigation");
  const [selectedWetland, setSelectedWetland] = useState(null);
  const [data, setData] = useState(null);
  console.log('selected on page: ', selectedWetland);

  if (data) {
    data.map((item, index) => {
      console.log(item['Site name'])
    })
  }

  useEffect(() => {
    const fethData = async () => {
      const res = await fetch("/api/get-mapinfo");
      const result = await res.json();
      setData(result.result.rows);
    }

    fethData()
  }, [])

  // Data changes handlers
  const handleMapViewChange = view => setMapView(view);
  const handleWetlandSelection = wetland => setSelectedWetland(wetland);
  return (
    <div className="w-full relative">
      <Selectors data={data} onViewChange={handleMapViewChange} onWetlandChange={handleWetlandSelection}/>
      <MapVis view={mapView} data={data}/>
    </div>
  );
};

export default Page;
