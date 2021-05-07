import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api"
import "@reach/combobox/styles.css"

const libraries = ["places"]

const mapContainerStyle = {
  height: "40vh",
  width: "50vw",
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

export default function Map() {
    const center = {
        lat: 50.049683,
        lng: 19.944544,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAP,
        libraries,
    })

    if(loadError) return 'Map Loading Error'
    if(!isLoaded) return <div className="loading"><div className="loading"></div></div>

    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options}>
                <Marker key={Marker.toString()} position={{lat: center.lat, lng: center.lng}} />
            </GoogleMap>
        </div>
    )
}
