"use client";
import { useState, useEffect } from "react";
import MapVis from "@/components/dashboard/mapvis";
import Selectors from "@/components/dashboard/selectors";
import { ZoneFilter } from "@/components/dashboard/zonefilter";

const Page = () => {
  const [mapView, setMapView] = useState("Navigation");
  const [selectedWetland, setSelectedWetland] = useState(null);
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState({
    protectedZone: true,
    urbanZone: true,
    others: true
  });

  if (data) {
    data.map((item, index) => {
      console.log(item['Site name'])
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/get-mapinfo");
      const result = await res.json();
      setData(result.result.rows);
    }

    fetchData()
  }, [])

  // Data changes handlers
  const handleMapViewChange = view => setMapView(view);
  const handleWetlandSelection = wetland => setSelectedWetland(wetland);

  // New handler for filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Filtros actualizados:", newFilters);
  };

  return (
    <div className="w-full relative">
      <Selectors 
        data={data} 
        onViewChange={handleMapViewChange} 
        onWetlandChange={handleWetlandSelection}
      />
      <MapVis 
        view={mapView} 
        data={data} 
        wetland={selectedWetland} 
        filters={filters} 
      />
      <ZoneFilter onFilterChange={handleFilterChange} />
    </div>
  );
};

export default Page;