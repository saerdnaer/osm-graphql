
This is an example postgres schema, based on the rails apidb behind the openstreetmap.org website.

```sh
createdb openstreetmap
psql openstreetmap < schema.sql
psql openstreetmap < functions.sql

```

For demo data you can either import the prepared `sample-data.sql` or import your own OSM-XML/-PDF files via:

```sh
osmosis --read-xml local-area.osm --log-progress --write-apidb database=openstreetmap
```