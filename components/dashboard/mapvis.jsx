"use client";
import { useState } from "react";
import Map, {Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const MapVis = ({ view, data}) => {

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
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
          >
            {data && data.map((item, index) => (
              <Marker
                className="cursor-pointer"
                key={index}
                latitude={item.Latitude}
                longitude={item.Longitude}
              >
              </Marker>
            ))}
          </Map>
        </div>
      ) : (
        <iframe
          key="timelapse-iframe"
          width="100%"
          height="100%"
          src="https://earthengine.google.com/iframes/timelapse_player_embed.html#v=4.883333,-77.366667,2000,latLng&t=0.03&ps=50&bt=19840101&et=20221231"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default MapVis;
