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
        name: "Status",
        type: "relationship",
        relationTo: "status",
        hasMany: false,
      },
      {
        name: 'TanggalPendaftaran',
        type: "date",
        required: true,
      },
    ],
  };
  
  export default Regis;