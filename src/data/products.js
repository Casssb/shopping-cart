import landscape01 from '../assets/images/landscape-alien-world.webp';
import landscape02 from '../assets/images/landscape-factory-black-white.webp';
import landscape03 from '../assets/images/landscape-lost.webp';
import landscape04 from '../assets/images/landscape-pompeii.webp';
import landscape05 from '../assets/images/landscape-sky-city.webp';
import landscape06 from '../assets/images/landscape-summer-sea.webp';
import landscape07 from '../assets/images/landscape-city-ruins.webp';
import portrait01 from '../assets/images/portrait-alien.webp';
import portrait02 from '../assets/images/portrait-boombox-head.webp';
import portrait03 from '../assets/images/portrait-cat.webp';
import portrait04 from '../assets/images/portrait-girl-blonde.webp';
import portrait05 from '../assets/images/portrait-otter.webp';
import shape01 from '../assets/images/shape-band-logo.webp';
import shape02 from '../assets/images/shape-spiritual-dimensions.webp';
import shape03 from '../assets/images/shape-twelve-dimensions.webp';
import shape04 from '../assets/images/shape-robot-head.webp';
import shape05 from '../assets/images/shape-peace-and-love.webp';
import misc01 from '../assets/images/misc-innocence-stars.webp';
import misc02 from '../assets/images/misc-wallpaper-clouds.webp';
import misc03 from '../assets/images/misc-watercolour-stars.webp';
import misc04 from '../assets/images/misc-introverts.webp';
import misc05 from '../assets/images/misc-gratitude.webp';

const products = [
  {
    name: 'Alien World',
    id: 'landscape01',
    ai: 'Stable Diffusion',
    price: 200,
    category: 'landscape',
    imageSrc: landscape01,
    prompt:
      'An alien world with fauna, photograph, wide angle, 4k, realistic, realism, ultrarealistic',
  },
  {
    name: 'Cyberpunk Factory',
    id: 'landscape02',
    ai: 'Midjourney',
    price: 400,
    category: 'landscape',
    imageSrc: landscape02,
    prompt:
      'Lonely stranger inside a hall of monumental cyberpunk industrial factory megacomplex; by tsutomi nihei; hyperrealistic, 4K wallpaper, highly detailed',
  },
  {
    name: 'Lost Innocence',
    id: 'landscape03',
    ai: 'Midjourney',
    price: 500,
    category: 'landscape',
    imageSrc: landscape03,
    prompt: 'Lost Innocence',
  },
  {
    name: 'Pompeii',
    id: 'landscape04',
    ai: 'Stable Diffusion',
    price: 260,
    category: 'landscape',
    imageSrc: landscape04,
    prompt:
      'A digital intricate illustration concept art of massive city of Pompeii, epic composition, magical atmosphere, cinematic lighting + masterpiece, trending on artstation',
  },
  {
    name: 'Sky City',
    id: 'landscape05',
    ai: 'Stable Diffusion',
    price: 220,
    category: 'landscape',
    imageSrc: landscape05,
    prompt: 'Flying city in the clouds, steampunk, romanticism artwork',
  },
  {
    name: 'Summer Sea',
    id: 'landscape06',
    ai: 'Midjourney',
    price: 140,
    category: 'landscape',
    imageSrc: landscape06,
    prompt: 'End of summer',
  },
  {
    name: 'City Ruins',
    id: 'landscape07',
    ai: 'Midjourney',
    price: 200,
    category: 'landscape',
    imageSrc: landscape07,
    prompt: 'Futuristic cityscape in ruin, reclaimed by nature',
  },
  {
    name: 'Alien Portrait',
    id: 'portrait01',
    ai: 'Midjourney',
    price: 270,
    category: 'portrait',
    imageSrc: portrait01,
    prompt:
      'Portrait,alterd carbon,creature , neon, detailed intricate render, dark atmosphere, detailed illustration, hd',
  },
  {
    name: 'Boombox Head Portrait',
    id: 'portrait02',
    ai: 'Midjourney',
    price: 290,
    category: 'portrait',
    imageSrc: portrait02,
    prompt: 'Boombox head, underground hip-hop in Cameron Knight style',
  },
  {
    name: 'Cat Portrait',
    id: 'portrait03',
    ai: 'Stable Diffusion',
    price: 370,
    category: 'portrait',
    imageSrc: portrait03,
    prompt: 'Hyper realistic cat, 8k, ultra realism',
  },
  {
    name: 'Girl Portrait',
    id: 'portrait04',
    ai: 'Midjourney',
    price: 270,
    category: 'portrait',
    imageSrc: portrait04,
    prompt: 'Girl with tanned skin and blond hair with green eyes',
  },
  {
    name: 'Otter Portrait',
    id: 'portrait05',
    ai: 'Midjourney',
    price: 260,
    category: 'portrait',
    imageSrc: portrait05,
    prompt: 'An otter eating bitcoin, 4 k, hd, ',
  },
  {
    name: 'Band Logo',
    id: 'shape01',
    ai: 'Midjourney',
    price: 170,
    category: 'shape',
    imageSrc: shape01,
    prompt:
      ' Band logo by graphic illustration Ben Enwonwu,jamie hewlett, vivid giltter color palette, 3D geometric shapes enclosed in a transparent glass sphere,overlapping Curves',
  },
  {
    name: 'Spiritual Dimensions',
    id: 'shape02',
    ai: 'Midjourney',
    price: 180,
    category: 'shape',
    imageSrc: shape02,
    prompt: 'Spiritual Dimensions',
  },
  {
    name: 'Twelve Dimensions',
    id: 'shape03',
    ai: 'Midjourney',
    price: 190,
    category: 'shape',
    imageSrc: shape03,
    prompt: 'Twelve Dimensions',
  },
  {
    name: 'Robot Head',
    id: 'shape04',
    ai: 'Midjourney',
    price: 190,
    category: 'shape',
    imageSrc: shape04,
    prompt: 'A robot face in a crown, avatar, minimalistic, flat, clean, vector graphics, adobe illustrator',
  },
  {
    name: 'Peace & Love',
    id: 'shape05',
    ai: 'Midjourney',
    price: 190,
    category: 'shape',
    imageSrc: shape05,
    prompt: 'Peace & Love',
  },
  {
    name: 'Stars (innocence)',
    id: 'misc01',
    ai: 'Midjourney',
    price: 500,
    category: 'misc',
    imageSrc: misc01,
    prompt: 'Thoughts of innocence falling from the stars',
  },
  {
    name: 'Clouds (Wallpaper)',
    id: 'misc02',
    ai: 'Stable Diffusion',
    price: 500,
    category: 'misc',
    imageSrc: misc02,
    prompt: 'Wallpaper, clouds, blue sky, bright colors, pastel colors, with kittens, butterflies, graphic design style',
  },
  {
    name: 'Stars (Watercolour)',
    id: 'misc03',
    ai: 'Midjourney',
    price: 500,
    category: 'misc',
    imageSrc: misc03,
    prompt: 'White background, watercolor, pure white surrounding, stars, constellation.raypunk',
  },
  {
    name: 'Introverts',
    id: 'misc04',
    ai: 'Midjourney',
    price: 500,
    category: 'misc',
    imageSrc: misc04,
    prompt: `An Introvert's everything`,
  },
  {
    name: 'Gratitude',
    id: 'misc05',
    ai: 'Midjourney',
    price: 500,
    category: 'misc',
    imageSrc: misc05,
    prompt: 'Gratitude',
  },
];

export default products;
