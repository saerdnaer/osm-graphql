import  { SchemaBuilder } from "graphile-build";

const DefaultOrderByOrder = (builder: SchemaBuilder) => {
  return builder.hook(
    "GraphQLObjectType:fields:field:args",
    (args, build, context) => {
      const {
        extend, getTypeByName, pgGetGqlTypeByTypeIdAndModifier, inflection,
      } = build;
      const {
        scope: { fieldName, isPgFieldConnection, pgFieldIntrospection: table }, Self,
      } = context;

      if (!isPgFieldConnection ||
        !table ||
        table.kind !== "class" ||
        !table.namespace ||
        !table.isSelectable ||
        !args.orderBy) {
        return args;
      }
      const TableType = pgGetGqlTypeByTypeIdAndModifier(table.type.id, null);
      const tableTypeName = TableType.name;
      const TableOrderByType = getTypeByName(
        inflection.orderByType(tableTypeName)
      );
      if (!TableOrderByType) {
        return args;
      }

      const orderAsc = inflection.builtin("ORDER_ASC");
      const seqAsc = inflection.builtin("SEQUENCE_ID_ASC");
      const primaryKeyAsc = inflection.builtin("PRIMARY_KEY_ASC");

      const defaultValueEnum = TableOrderByType.getValues().find(({ name }: any) => name === orderAsc)
        || TableOrderByType.getValues().find(({ name }: any) => name === seqAsc)
        || TableOrderByType.getValues().find(({ name }: any) => name === primaryKeyAsc)
        || TableOrderByType.getValues()[0];

      return extend(args, {
        orderBy: extend(
          args.orderBy,
          {
            defaultValue: defaultValueEnum && [defaultValueEnum.value],
          },
          `Adding defaultValue ${defaultValueEnum.name} to orderBy for field '${fieldName}' of '${Self.name}'`
        ),
      });
    },
    ["PgConnectionOrderByDefaultOrder"]
  );
};

export default DefaultOrderByOrder;
