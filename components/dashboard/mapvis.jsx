"use client";
import { useState, useEffect, useCallback } from "react";
import Map, { Marker, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPinIcon } from "lucide-react";

const MapVis = ({ view, data, wetland, filters }) => {
  const [mapRef, setMapRef] = useState(null);
  const [lon, setLon] = useState(-77.366667);
  const [lat, setLat] = useState(4.88333);

  const onMapLoad = useCallback(event => {
    setMapRef(event.target);
  }, []);

  useEffect(() => {
    if (mapRef && wetland) {
      mapRef.flyTo({
        center: [wetland.lon, wetland.lat],
        zoom: 14,
        duration: 2000
      });
    }

    if (wetland) {
      setLon(wetland.lon);
      setLat(wetland.lat);
    }
  }, [mapRef, wetland]);

  const handleMarkerClick = useCallback(
    (longitude, latitude) => {
      if (mapRef) {
        mapRef.flyTo({
          center: [longitude, latitude],
          zoom: 14,
          duration: 2000
        });
      }
    },
    [mapRef]
  );

  const shouldShowMarker = (item) => {
    switch(item["Zone type"]) {
      case "Protected Area":
        return filters.protectedZone;
      case "Urban Area":
        return filters.urbanZone;
      default:
        return filters.others;
    }
  };

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      {view === "Navigation"
        ? <div id="naviView" className="w-full h-full">
            <Map
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude: -77.366667,
                latitude: 4.883333,
                zoom: 12
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
              onLoad={onMapLoad}
            >
              {data &&
                data.map((item, index) =>
                  shouldShowMarker(item) && (
                    <Marker
                      className="flex flex-col items-center justify-center cursor-pointer"
                      key={index}
                      latitude={item.Latitude}
                      longitude={item.Longitude}
                      onClick={() =>
                        handleMarkerClick(item.Longitude, item.Latitude)}
                    >
                      <MapPinIcon className="text-error-dark" size={32} />
                    </Marker>
                  )
                )}
            </Map>
          </div>
        : <iframe
            key="timelapse-iframe"
            width="100%"
            height="100%"
            src={`https://earthengine.google.com/iframes/timelapse_player_embed.html#v=${lat},${lon},3000,latLng&t=0.03&ps=50&bt=19840101&et=20221231`}
            allowFullScreen
          />}
    </div>
  );
};

export default MapVis;