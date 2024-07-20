"use client";
import * as React from "react";
import Map from "react-map-gl";

const MapVis = () => {
  return (
    <div className="w-full h-[50svh] rounded-2xl overflow-hidden">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -77.366667,
          latitude: 4.883333,
          zoom: 14
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11" // Corregido aquí
      />
    </div>
  );
};

export default MapVis;
