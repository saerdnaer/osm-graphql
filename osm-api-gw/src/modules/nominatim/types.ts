
export type NominatimSearchParams = {
  q: string;
  format?: 'xml' | 'json' | 'jsonv2' | 'jsonv3' | 'geojson' | 'geocodejson';
  addressdetails?: 0 | 1;
  limit?: number;
  dedupe?: 0 | 1;
  polygon_geojson?: 0 | 1;
  polygon_kml?: 0 | 1;
  polygon_svg?: 0 | 1;
  extratags?: 0 | 1;
  namedetails?: 0 | 1;
  viewbox?: string;
  bounded?: 0 | 1;
  countrycodes?: string;
  exclude_place_ids?: string;
  accept_language?: string;
}


export type NominatimResult = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: [string, string, string, string];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon?: string;
}
