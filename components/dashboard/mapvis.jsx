"use client";
import { useState } from "react";
import Map from "react-map-gl";

const MapVis = ({ view }) => {
  return (
    <div className="w-full h-[50svh] rounded-2xl overflow-hidden">
      {view === "Navigation" ? (
        <div id="naviView" className="w-full h-full">
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: -77.366667,
              latitude: 4.883333,
              zoom: 12,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          />
        </div>
      ) : (
        <iframe
          key="timelapse-iframe"
          width="100%"
          height="100%"
          src="https://earthengine.google.com/iframes/timelapse_player_embed.html#v=61.11555,-147.13342,9.424,latLng&t=0.03&ps=50&bt=19840101&et=20221231"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default MapVis;
