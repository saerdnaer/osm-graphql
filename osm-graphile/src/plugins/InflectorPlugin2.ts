import { makeAddInflectorsPlugin } from 'graphile-utils';

// From https://github.com/graphile-contrib/pg-many-to-many#inflector-plugin
const inflectorPlugin = makeAddInflectorsPlugin(
  {
    manyToManyRelationByKeys(
      _leftKeyAttributes,
      _junctionLeftKeyAttributes,
      _junctionRightKeyAttributes,
      _rightKeyAttributes,
      _junctionTable,
      rightTable,
      _junctionLeftConstraint,
      junctionRightConstraint
    ) {
      if (junctionRightConstraint.tags.manyToManyFieldName) {
        return junctionRightConstraint.tags.manyToManyFieldName;
      }
      return this.camelCase(
        `${this.pluralize(this._singularizedTableName(rightTable))}`
      );
    },
    manyToManyRelationByKeysSimple(
      _leftKeyAttributes,
      _junctionLeftKeyAttributes,
      _junctionRightKeyAttributes,
      _rightKeyAttributes,
      _junctionTable,
      rightTable,
      _junctionLeftConstraint,
      junctionRightConstraint
    ) {
      if (junctionRightConstraint.tags.manyToManySimpleFieldName) {
        return junctionRightConstraint.tags.manyToManySimpleFieldName;
      }
      return this.camelCase(
        `${this.pluralize(this._singularizedTableName(rightTable))}List`
      );
    },
  },
  true // Passing true here allows the plugin to overwrite existing inflectors.
);

export default inflectorPlugin;
