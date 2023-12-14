// channel.js
/** @type {import('payload/types').CollectionConfig} */

const Channel = {
  slug: 'channels',
  auth: false,   admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: "name",
      label: 'Channel Name',
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
      name: 'channelId',
      label: 'Channel ID',
      type: 'text',
      required: true,
      unique: true,
    },
    /*{
      name: 'users',
      label: 'Users in Channel',
      type: 'relationship',
      relationTo: 'users', // Ganti 'users' sesuai dengan koleksi pengguna Anda
      hasMany: true,
    },*/
    {
      name: 'messages',
      label: 'Channel Messages',
      type: 'text',
    /*  relationTo: 'messages', // Ganti 'messages' sesuai dengan koleksi pesan Anda
      hasMany: true,*/
    },
  ],
};

export default Channel;