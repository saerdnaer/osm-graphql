import { RESTDataSource } from '@apollo/datasource-rest';
import { NominatimResult, NominatimSearchParams } from './types';

class NominatimAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://nominatim.openstreetmap.org';
  }

  override async get<T=NominatimResult[]>(path: string, params?: any) : Promise<T> {
    const response = await super.get<T>(path, { params } as any);

    return Array.isArray(response) ? response : [] as T;
  }

  async search(params: NominatimSearchParams) {
    const response = await this.get('/search', params);
    return response;
  }

  async reverse(params: { lat: number; lon: number; zoom?: number }) {
    const response = await this.get('/reverse', params);
    return response;
  }

  async lookup(params: { osm_ids: string; format?: 'xml' | 'json' }) {
    const response = await this.get('/lookup', params);
    return response;
  }

  async searchWithPolygon(params: NominatimSearchParams & {
    polygon_geojson?: 1;
    polygon_kml?: 1;
    polygon_svg?: 1;
  }) {
    const response = await this.get('/search', params);
    return response;
  }

  async searchWithExtraTags(params: NominatimSearchParams & { extratags: 1 }) {
    const response = await this.get('/search', params);
    return response;
  }

  async searchWithDetails(params: NominatimSearchParams & { addressdetails: 1 }) {
    const response = await this.get('/search', params);
    return response;
  }
}

export default NominatimAPI;
