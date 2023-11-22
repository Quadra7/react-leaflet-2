import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

export default function LayerSelector(props) {
    const { list } = props;

    return (
        <>
            <LayersControl.BaseLayer name='OTM' checked>
                <TileLayer url={list['otm']}/>
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='CYCLE'>
                <TileLayer url={list['cycle']}/>
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name='TILEGEN'>
                <TileLayer url={list['tilegen']}/>
            </LayersControl.BaseLayer>
        </>
    );
}
