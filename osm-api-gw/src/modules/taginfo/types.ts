type KeyInfo = {
  key: string;
  count_nodes: number;
  count_ways: number;
  count_relations: number;
  in_wiki: boolean;
  wiki_page?: string;
  description?: string;
  count_all: number;
  count_usage: number;
  count_distinct_usage?: number;
  count_data_size?: number;
  in_wiki_data?: boolean;
  prevalent_values: string[];
}

type TaginfoResponse = {
  data: KeyInfo[];
}