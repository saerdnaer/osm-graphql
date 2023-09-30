import { osm } from './osm-base';
import { overpass } from './overpass'
import { taginfo } from './taginfo'

//import wikidata from './wikidata'


export const modules = [
  osm,
  overpass,
  taginfo,
];