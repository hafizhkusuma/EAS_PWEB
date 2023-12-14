/** @type {import('payload/types').CollectionConfig} */

const Regis = {
    slug: 'regis',
    auth: false,   
    admin: {
      useAsTitle: 'name',
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
        label: 'Name',
        type: "text",
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        unique: true,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'text',
        required: true,
        unique: true,
      },
      {
        name: 'asalSekolah',
        label: 'Asal Sekolah',
        type: 'text',
        required: true,
      },
      {
        name: "status",
        type: "select",
        options: [
          { label: "Waiting", value: "1" },
          { label: "Rejected", value: "2" },
          { label: "Accepted", value: "3" },
        ],
        defaultValue: "1",
        required: false,
      },
      {
        name: 'timestamp',
        label: 'Tanggal Pendaftaran',
        type: "date",
        required: true,
      },
    ],
  };
  
  export default Regis;