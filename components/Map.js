
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 39.0425,
  lng: -94.5872
};

const position = {
  lat: 39.041525230284435,
  lng: -94.58548896061824
};


export default function Map(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDmBmYV9BDIKleW0O16a55WpKc7Ff38TMI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
//    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{mapId: '12464baacf248c3e'}}
    >
          <Marker
      position={position}
      label=""
    />
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}
