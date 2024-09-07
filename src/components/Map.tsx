"use client";

import { GoogleMap, Polygon } from "@react-google-maps/api";
// import geoData from '@/data/geo.json'
import { useEffect, useState } from "react";
import { geoJsonData } from "../../geoData";

interface GeoJsonCoordinate {
	lat: number;
	lng: number;
}

interface GeoJsonPolygon {
	name: string;
	coordinates: GeoJsonCoordinate[];
}

interface GeoJsonData {
	type: "MultiPolygon";
	coordinates: Array<Array<Array<[number, number]>>>;
}

const defaultMapContainerStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "12px 12px 12px 12px",
};

const defaultMapCenter = {
	lat: 33.8731313,
	lng: -84.3981227,
};

const defaultMapZoom = 11;

const defaultMapOptions = {
	zoomControl: true,
	tilt: 0,
	gestureHandling: "auto",
	mapTypeId: "roadmap",
};



const MapComponent = () => {
	const [polygons, setPolygons] = useState<GeoJsonPolygon[]>([]);

	useEffect(() => {
		const parseGeoJSON = (geoJson: GeoJsonData): GeoJsonPolygon[] => {
			return geoJson.coordinates.map((polygonCoords, index) => ({
				name: `Polygon ${index + 1}`,
				coordinates: polygonCoords[0].map((coord) => ({
					lat: coord[1],
					lng: coord[0],
				})),
			}));
		};

		setPolygons(parseGeoJSON(geoJsonData));
	}, []);

	return (
		<div className="w-[335px] h-[352px] md:w-[726px] lg:w-[626px] lg:h-[500px] xl:w-[926px] xl:h-[540px]">
			<GoogleMap
				mapContainerStyle={defaultMapContainerStyle}
				center={defaultMapCenter}
				zoom={defaultMapZoom}
				options={defaultMapOptions}
			>
				{polygons.map((polygon, index) => (
					<Polygon
						key={index}
						path={polygon.coordinates}
						options={{
							fillColor: "#FF0000",
							fillOpacity: 0.1,
							strokeColor: "#0000FF",
							strokeOpacity: 0.6,
							strokeWeight: 1,
						}}
					/>
				))}
			</GoogleMap>
		</div>
	);
};

export { MapComponent };
