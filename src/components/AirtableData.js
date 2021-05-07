const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE }).base('app8Cy2NwDdrw3TWG').table('products')

const dataOne = async() =>{
    const { records } = await airtable.list()
    const products = records.map((product) => {
        const { name, category, price, image } = product.fields
        return { category, name, image, price }
    })
    return dataOne
} 


const menuData = [
  {
    id: 1111,
    title: 'American Burger',
    category: 'burger',
    price: 16,
    img: 'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2222,
    title: 'Sweet & Spicy',
    category: 'burger',
    price: 15,
    img: 'https://dl.airtable.com/.attachmentThumbnails/e880019a79f54722ffd309decc595389/c6ef2f13',
  },
  {
    id: 3333,
    title: 'Chicen Burger',
    category: 'burger',
    price: 14,
    img: 'https://dl.airtable.com/.attachmentThumbnails/ab33c74802a0226d4483534e86ba4fbd/38c49d08',
  },
  {
    id: 4444,
    title: 'Polish Special',
    category: 'burger',
    price: 13,
    img: 'https://dl.airtable.com/.attachmentThumbnails/6d36afad64ff7049cb5c871044ea9dfb/5a209410',
  },
  {
    id: 5555,
    title: 'Vegetarian',
    category: 'burger',
    price: 12,
    img: 'https://dl.airtable.com/.attachmentThumbnails/b25dc76efbcb480d817b2a57a17a53e0/94f9a28d',
  },
  {
    id: 6666,
    title: 'Hell Burger',
    category: 'burger',
    price: 17,
    img: 'https://dl.airtable.com/.attachmentThumbnails/beadf9eb117ab2f520c9bc12d5f1508e/f679c38c',
  },
  {
    id: 7777,
    title: 'Margherita',
    category: 'pizza',
    price: 14,
    img: 'https://dl.airtable.com/.attachmentThumbnails/cde9794038985a53def8105febbb49fb/1f59dada',
  },
  {
    id: 8888,
    title: 'Salami',
    category: 'pizza',
    price: 15,
    img: 'https://dl.airtable.com/.attachmentThumbnails/5c8b870ae30b34a5e86e230cb7cd91b6/a3bdf3a3',
  },
  {
    id: 9999,
    title: 'Prosciutto',
    category: 'pizza',
    price: 16,
    img: 'https://dl.airtable.com/.attachmentThumbnails/be9ebd734f761053fe5dc39b7380847e/de4d0847',
  },
  {
    id: 1000,
    title: 'Quattro Formaggi',
    category: 'pizza',
    price: 17,
    img: 'https://dl.airtable.com/.attachmentThumbnails/bda4bd912f4fa2b3e5700200441da0a4/13e84c11',
  },
  {
    id: 1100,
    title: 'Diavola',
    category: 'pizza',
    price: 20,
    img: 'https://dl.airtable.com/.attachmentThumbnails/5f7382deb2411154493870f28f1a6f7c/335e1713',
  },
  {
    id: 1200,
    title: 'Capricciosa',
    category: 'pizza',
    price: 19,
    img: 'https://dl.airtable.com/.attachmentThumbnails/fd7c6b0149905efbe7f55a4e701f7feb/e221e827',
  },
  {
    id: 1300,
    title: 'Maki',
    category: 'sushi',
    price: 19,
    img: 'https://dl.airtable.com/.attachmentThumbnails/4dd613400ad3990b010761c4af212062/40bb463b',
  },
  {
    id: 1400,
    title: 'Sashimi',
    category: 'sushi',
    price: 18,
    img: 'https://dl.airtable.com/.attachmentThumbnails/74ee61aebdc92a7eaafbf60aabe32261/40d9160c',
  },
  {
    id: 1500,
    title: 'Nigiri',
    category: 'sushi',
    price: 25,
    img: 'https://dl.airtable.com/.attachmentThumbnails/bd246a7bd77bb90a1f996cd5f12f5245/95cede30',
  },
  {
    id: 1600,
    title: 'Spaghetti Carbonara',
    category: 'pasta',
    price: 20,
    img: 'https://dl.airtable.com/.attachmentThumbnails/7f639448d78bef53b9ee2b56a7815340/865cb7e1',
  },
  {
    id: 1700,
    title: 'Tagliatelle with duck',
    category: 'pasta',
    price: 22,
    img: 'https://dl.airtable.com/.attachmentThumbnails/e5ab8faeccc46e42df7bd885d739d74c/dd340d34',
  },
  {
    id: 1800,
    title: 'Pork lasagna',
    category: 'pasta',
    price: 24,
    img: 'https://dl.airtable.com/.attachmentThumbnails/85584f5a55bb406cc56c520aaeaca350/ad314833',
  },
  {
    id: 1900,
    title: 'Banbury cake',
    category: 'desserts',
    price: 12,
    img: 'https://dl.airtable.com/.attachmentThumbnails/60c9fddeb91ac7a03614d6b86eec3bb1/cfe057c0',
  },
  {
    id: 2000,
    title: 'Crème brûlée',
    category: 'desserts',
    price: 11,
    img: 'https://dl.airtable.com/.attachmentThumbnails/bb764856c5cb37c1a283d8a0155aa861/9258910d',
  },
  {
    id: 2100,
    title: 'Ice cream cup',
    category: 'desserts',
    price: 10,
    img: 'https://dl.airtable.com/.attachmentThumbnails/8a9b90837447ff67f0d26c9544d503f6/d909389a',
  },
  {
    id: 2200,
    title: 'Fruit juice',
    category: 'drinks',
    price: 5,
    img: 'https://dl.airtable.com/.attachmentThumbnails/98be52cd3b7f92b313249661a6baface/19df2190',
  },
  {
    id: 2300,
    title: 'Still mineral water',
    category: 'drinks',
    price: 3,
    img: 'https://dl.airtable.com/.attachmentThumbnails/96aac27b3b913a673e214411f0a1d20a/7fb8aa82',
  },
  {
    id: 2400,
    title: 'Sprite',
    category: 'drinks',
    price: 3,
    img: 'https://dl.airtable.com/.attachmentThumbnails/9fa1613f524fa322072f6df878865ae2/083e96db',
  },
  {
    id: 2500,
    title: 'Mojito',
    category: 'alcohols',
    price: 6,
    img: 'https://dl.airtable.com/.attachmentThumbnails/a7a870b3d2d6da2edffc448bc616aeb0/9ad119f8',
  },
  {
    id: 2600,
    title: 'Cuba Libre',
    category: 'alcohols',
    price: 7,
    img: 'https://dl.airtable.com/.attachmentThumbnails/92b3d1a661a70af824fac688cbb5d034/1d1ea5aa',
  },
  {
    id: 2700,
    title: 'Sex on the Beach',
    category: 'alcohols',
    price: 6,
    img: 'https://dl.airtable.com/.attachmentThumbnails/7692587b3ea0730be71cc65ef64b0a55/de9728dd',
  },
];
export default menuData;
