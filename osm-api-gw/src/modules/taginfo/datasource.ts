import { RESTDataSource } from '@apollo/datasource-rest';


class TaginfoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://taginfo.openstreetmap.org/api/4/';
  }

  async keys(query: string) {
    const params: TaginfoKeysAllQueryParams = {
      include: 'prevalent_values',
      sortname: 'count_nodes',
      sortorder: 'desc',
      page: 1,
      rp: 100,
      // format: 'json_pretty',
    };

    const response = await this.get<TaginfoKeysAllResponse>('keys/all', { params } as any);
    return response;
  }
}


// Request query parameters
type TaginfoKeysAllQueryParams = {
  include?: 'prevalent_values' | 'prevalent_values,description';
  format?: 'json' | 'json_pretty';
  page?: number;
  /** results per page */
  rp?: number;
  sortname?: 'key' | 'count_all' | 'count_nodes' | 'count_ways' | 'count_relations' | 'values_all' | 'users_all' | 'in_wiki' | 'length';
  sortorder?: 'asc' | 'desc';
};


export type TaginfoResponse = {
  url:        string;
  data_until: Date;
  page:       number;
  rp:         number;
  total:      number;
  data?:       {
    key:                      string;
    count_all:                number;
    count_all_fraction:       number;
    count_nodes:              number;
    count_nodes_fraction:     number;
    count_ways:               number;
    count_ways_fraction:      number;
    count_relations:          number;
    count_relations_fraction: number;
    values_all:               number;
    users_all:                number;
    in_wiki:                  boolean;
    projects:                 number;
  }[];
}


// Response data
type TaginfoKeysAllResponse = {
  data: {
    id: number;
    key: string;
    description?: string;
    in_wiki?: boolean;
    object_count: number;
    count_all?: number;
    count_nodes?: number;
    count_ways?: number;
    count_relations?: number;
    count_areas?: number;
    count_lines?: number;
    count_other?: number;
    count_fraction?: number;
    count_fraction_all?: number;
    count_fraction_nodes?: number;
    count_fraction_ways?: number;
    count_fraction_relations?: number;
    count_fraction_areas?: number;
    count_fraction_lines?: number;
  }[];
  parameters: {
    page: number;
    rp: number;
    sortname: number;
    sortcount: number;
    sortcount_all: number;
    sortcount_nodes: number;
    sortcount_ways: number;
    sortcount_relations: number;
    sortcount_areas: number;
    sortcount_lines: number;
    sortcount_other: number;
    sortcount_fraction: number;
    sortcount_fraction_all: number;
    sortcount_fraction_nodes: number;
    sortcount_fraction_ways: number;
    sortcount_fraction_relations: number;
    sortcount_fraction_areas: number;
    sortcount_fraction_lines: number;
    sort: 'asc' | 'desc';
  };
  version: string;
};


export default TaginfoAPI;