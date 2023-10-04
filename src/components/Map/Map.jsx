import React, {useState, useCallback, memo} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { StyledGoogleMap } from './Map.styled.js';

const MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 50.08225945973062,
  lng: 8.243657069459159
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    map.setZoom(17)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <StyledGoogleMap>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} />
        <></>
      </GoogleMap>
    </StyledGoogleMap>
  ) : <></>
}

export default memo(Map)