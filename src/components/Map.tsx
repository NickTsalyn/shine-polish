'use client'

import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '12px 12px 12px 12px',
};

const defaultMapCenter = {
    lat: 33.8731313,
    lng: -84.3981227
   }

const defaultMapZoom = 11

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

const MapComponent = () => {
    return (
        <div className="w-[335px] h-[352px] md:w-[726px] lg:w-[626px] lg:h-[500px] xl:w-[926px] xl:h-[540px]">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
            </GoogleMap>
        </div>
    )
};

export { MapComponent };