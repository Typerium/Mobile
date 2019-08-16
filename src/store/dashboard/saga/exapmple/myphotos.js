/* eslint-disable import/prefer-default-export */
/* eslint-disable global-require */
const screen = {
  screen: 'MY PHOTOS',
  titleSmall: 'MY PHOTOS IMAGES',
  title: 'Select something',
  titleColor: 'from your photos',
  subscription: 'and make something beautiful',
  background: require('../../../../assets/image/example/Rectangle11(4).png'),
};

const selections = [{
  title: 'Gallery',
  value: 'Gallery',
}, {
  title: 'Screenshots',
  value: 'Screenshots',
}, {
  title: 'Bluetooth',
  value: 'Bluetooth',
}, {
  title: 'Downloads',
  value: 'Downloads',
}, {
  title: 'Email attachments',
  value: 'Email attachments',
}];

export default { screen, selections };
