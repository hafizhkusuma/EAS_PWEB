import payload from "payload";
/** @type {import('payload/types').CollectionConfig} */
const Status = {
  slug: "status",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Status;