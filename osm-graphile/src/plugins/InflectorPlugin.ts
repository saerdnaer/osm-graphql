import { SchemaBuilder } from 'graphile-build'

 // Custom tags for repco
 // * Do not expose relation tables on their own
 // * Hide prisma migrations table
export default function CustomInflectorPlugin(builder: SchemaBuilder) {
  builder.hook('inflection', (oldInflection) => {
    return {
      ...oldInflection,
      singleRelationByKeysBackwards(
        detailedKeys: any,
        table: any,
        foreignTable: any,
        constraint: { tags: { foreignSingleFieldName: any; foreignFieldName: any; }; }
      ) {
        if (constraint.tags.foreignSingleFieldName) {
          return constraint.tags.foreignSingleFieldName;
        }
        if (constraint.tags.foreignFieldName) {
          return constraint.tags.foreignFieldName;
        }
        const baseName = this.getBaseNameFromKeys(detailedKeys);
        return this.camelCase(`${this._singularizedTableName(table)}`);

        if (baseName) {
          const oppositeBaseName = this.getOppositeBaseName(baseName);
          if (oppositeBaseName) {
            return this.camelCase(
              `${oppositeBaseName}-${this._singularizedTableName(table)}`
            );
          }
          return this.camelCase(`${this._singularizedTableName(table)}`);

        }
        return oldInflection.singleRelationByKeysBackwards(
          detailedKeys,
          table,
          foreignTable,
          constraint
        );
      }
    };
  })
}
