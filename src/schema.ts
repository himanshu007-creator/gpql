import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";

const builder = new SchemaBuilder({
  plugins: [SimpleObjectsPlugin],
});

const StudentType = builder.simpleObject("Student", {
  fields: (t) => ({
    Name: t.string({
      nullable: false,
    }),
    branch: t.string({
      nullable: false,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    student: t.field({
      type: StudentType,
      resolve: (parent, args) => {
        return {
          Name: "Himanshu",
          branch: "ECE",
        };
      },
    }),
  }),
});

export const schema = builder.toSchema({});
