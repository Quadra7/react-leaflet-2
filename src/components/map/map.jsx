import { React, Component } from 'react';
import { MapContainer, LayersControl } from 'react-leaflet';

import LayerSelector from '../layer-selector';
import OverlaySelector from '../overlay-selector';
import TextBlock from '../text-block';

import './style.css';
import 'leaflet/dist/leaflet.css';

export default class Map extends Component {
    state = {
        zoom: 13,
        lat: 55.030204,
        lng: 82.92043,
        markerText: ''
    }

    AddNewText = (newText) => {
        this.setState({
            markerText: newText
        });
    }

    render() {
        const zoom = this.state.zoom;
        const startPosition = [this.state.lat, this.state.lng];

        const layers = {
            otm: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            cycle: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
            tilegen: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'
        };

        return(
            <>
                <MapContainer center={startPosition} zoom={zoom}>
                    <LayersControl position='topright'>
                        <LayerSelector list={layers} />
                        <OverlaySelector text={this.state.markerText}/>
                    </LayersControl>
                </MapContainer>
                <TextBlock Add={this.AddNewText}/>
            </>
        );
    }
}
