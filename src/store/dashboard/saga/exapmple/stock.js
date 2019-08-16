/* eslint-disable global-require */
const screen = {
  screen: 'STOCK',
  titleSmall: 'STOCK IMAGES',
  title: 'Discover',
  titleColor: 'new stock images',
  subscription: 'The only limit is your imagination',
  background: require('../../../../assets/image/example/Rectangle11.png'),
};

const selections = [{
  title: 'Popular',
  value: 'Popular',
}, {
  title: 'Editorial',
  value: 'Editorial',
}, {
  title: 'Wallpapers',
  value: 'Wallpapers',
}, {
  title: 'Nature',
  value: 'Nature',
}, {
  title: 'Business & work',
  value: 'Business & work',
}, {
  title: 'Animals',
  value: 'Animals',
}, {
  title: 'Travel',
  value: 'Travel',
}, {
  title: 'Fashion',
  value: 'Fashion',
}, {
  title: 'Food & drink',
  value: 'Food & drink',
}, {
  title: 'People',
  value: 'People',
}, {
  title: 'Health',
  value: 'Health',
}];

const items = [
  {
    key: '018',
    src: 'https://cdn.pixabay.com/photo/2019/07/12/02/26/butterfly-4331746_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
  {
    key: '019',
    src: 'https://cdn.pixabay.com/photo/2019/07/14/00/04/music-producer-4335953_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
  {
    key: '020',
    src: 'https://cdn.pixabay.com/photo/2019/07/20/20/57/rose-4351545_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
  {
    key: '001',
    src: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    vertical: false,
    horizontal: false,
  },

  {
    key: '002',
    src: 'https://cdn.pixabay.com/photo/2019/07/20/20/57/rose-4351545_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
  {
    key: '003',
    src: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    vertical: true,
    horizontal: false,
  },
  {
    key: '004',
    src: 'https://cdn.pixabay.com/photo/2019/08/07/07/05/girls-4390055_960_720.jpg',
    vertical: false,
    horizontal: true,
  },

  {
    key: '005',
    src: 'https://cdn.pixabay.com/photo/2018/03/30/09/14/body-of-water-3274777_960_720.jpg',
    vertical: false,
    horizontal: false,
  },

  {
    key: '006',
    src: 'https://cdn.pixabay.com/photo/2019/08/07/15/13/stairs-4390973_960_720.jpg',
    vertical: true,
    horizontal: false,
  },
  {
    key: '007',
    src: 'https://cdn.pixabay.com/photo/2018/03/30/09/14/body-of-water-3274777_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
  {
    key: '008',
    src: 'https://cdn.pixabay.com/photo/2019/07/12/02/26/butterfly-4331746_960_720.jpg',
    vertical: false,
    horizontal: false,
  },
];

export default { screen, selections, items };
