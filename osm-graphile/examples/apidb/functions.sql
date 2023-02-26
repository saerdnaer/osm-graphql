CREATE FUNCTION current_nodes_tags(node current_nodes) RETURNS json AS $$
  SELECT json_object_agg(k,v) FROM node_tags WHERE node_id = node.id
$$ LANGUAGE sql STABLE;


CREATE FUNCTION current_ways_tags(way current_ways) RETURNS json AS $$
  SELECT json_object_agg(k,v) FROM way_tags WHERE way_id = way.id
$$ LANGUAGE sql STABLE;


CREATE FUNCTION current_relations_tags(relation current_relations) RETURNS json AS $$
  SELECT json_object_agg(k,v) FROM relation_tags WHERE relation_id = relation.id
$$ LANGUAGE sql STABLE;


