import { Feature, FeatureCollection, Point, GeoJsonProperties } from 'geojson';

export interface IGeometry {
  type: 'Point';
  coordinates: number[];
}

export interface IGeoJson extends Feature<Point, GeoJsonProperties> {
  $key?: string;
}

export class GeoJson implements IGeoJson {
  type: 'Feature' = 'Feature';
  geometry: IGeometry;
  properties: GeoJsonProperties;

  constructor(coordinates: number[], properties: GeoJsonProperties = {}) {
    this.geometry = {
      type: 'Point',
      coordinates: coordinates,
    };
    this.properties = properties;
  }

  toPlainObject(): Feature<Point, GeoJsonProperties> {
    return {
      type: 'Feature',
      geometry: this.geometry,
      properties: this.properties,
    };
  }
}
