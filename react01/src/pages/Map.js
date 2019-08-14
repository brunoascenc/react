import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[-23.5489, -46.6388]}
        zoom={12}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[-23.5629, -46.6544]}>
          <Popup>
            Pat Salgados - SP AV.Paulista 
          </Popup>
        </Marker>

        <Marker position={[-23.56, -46.6327]}>
          <Popup>
            Pat Salgados - SP Liberdade 
          </Popup>
        </Marker>

        <Marker position={[-22.970722, -43.182365]}>
          <Popup>
            Pat Salgados - RJ Copacabana
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map