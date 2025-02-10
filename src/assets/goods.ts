import generateAwailibleSizes from '../features/generateAwailibleSizes';
import generateImageAddress from '../features/generateImageAddress';
import generateRandomNumber from '../features/generateRandomNumber';
import generateAwailibleColors from '../features/generateAwailibleColors';
import { EGoodsSizes, IGoodsItem } from '../entities/interfaces';

export const goods: IGoodsItem[] = [
  {
    id: 1,
    isInStock: true,
    title: 'Classic Monochrome Tees',
    details: [
      "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      "The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
    ],
    price: 75,
    imageListing: generateImageAddress(1, false),
    imageFull: [generateImageAddress(1, true), generateImageAddress(1, true)],
    colors: ['bg-blue-400', 'bg-yellow-400', 'bg-green-400'],
    sizes: [EGoodsSizes.S, EGoodsSizes.M, EGoodsSizes.XL, EGoodsSizes.XXL],
  },
  {
    id: 2,
    isInStock: generateRandomNumber(0, 3) > 0 ? true : false,
    title: 'Some cool goods 2',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(2, false),
    imageFull: [generateImageAddress(2, true), generateImageAddress(2, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 3,
    isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
    title: 'Some cool goods 3',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(3, false),
    imageFull: [generateImageAddress(3, true), generateImageAddress(3, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 4,
    isInStock: generateRandomNumber(0, 12) > 0 ? true : false,
    title: 'Some cool goods 4',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(4, false),
    imageFull: [generateImageAddress(4, true), generateImageAddress(4, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 5,
    isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
    title: 'Some cool goods 5',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(5, false),
    imageFull: [generateImageAddress(5, true), generateImageAddress(5, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 6,
    isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
    title: 'Some cool goods 6',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(6, false),
    imageFull: [generateImageAddress(6, true), generateImageAddress(6, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 7,
    isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
    title: 'Some cool goods 7',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(7, false),
    imageFull: [generateImageAddress(7, true), generateImageAddress(7, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 8,
    isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
    title: 'Some cool goods 8',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(8, false),
    imageFull: [generateImageAddress(8, true), generateImageAddress(8, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: generateAwailibleSizes(true),
  },
  {
    id: 9,
    isInStock: generateRandomNumber(0, 8) > 0 ? true : false,
    title: 'Some cool goods 9',
    details: [
      `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
      `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
    ],
    price: generateRandomNumber(50, 250),
    imageListing: generateImageAddress(9, false),
    imageFull: [generateImageAddress(9, true), generateImageAddress(9, true)],
    colors: generateAwailibleColors(generateRandomNumber(1, 7)),
    sizes: [EGoodsSizes.S, EGoodsSizes.M, EGoodsSizes.XXL],
  },
  // {
  //   id: 10,
  //   isInStock: generateRandomNumber(0, 1) > 0 ? true : false,
  //   title: 'Some cool goods 10',
  //   details: [
  //     `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eu metus accumsan, tempus eros vitae, pharetra ex. Nam risus eros, sagittis et rhoncus vitae, sollicitudin non mauris. Vivamus ultrices commodo magna, ac pulvinar sem consectetur eget. Nunc efficitur lacus quis erat ultrices interdum. Fusce ultricies, mauris id placerat consectetur, libero purus dignissim metus, eget cursus ipsum ex vitae enim. Quisque faucibus condimentum enim, nec vehicula nisi consequat ut. Vestibulum sollicitudin, ante sit amet mollis condimentum, velit dolor volutpat leo, consequat volutpat nibh nibh ac nibh. Aenean bibendum sollicitudin mi, sit amet laoreet justo convallis sit amet. Nullam ac convallis justo, ut sollicitudin felis. Praesent a tempor ex. Vivamus iaculis vel leo id sagittis. Maecenas quis quam vitae dui viverra cursus. Vivamus sed est elementum, dignissim dui sed, consequat tellus.`,
  //     `Curabitur tincidunt ex vel magna iaculis varius. Duis eleifend ligula vitae lectus cursus, eu luctus leo rutrum. Pellentesque ullamcorper lobortis velit ultrices hendrerit. In eleifend efficitur ante vitae dignissim. Sed lacus ipsum, tincidunt at justo sit amet, finibus congue arcu. Pellentesque sit amet malesuada tellus. Suspendisse eget vestibulum odio. Nam vitae euismod mauris. Donec justo libero, pharetra sit amet lobortis ac, ornare in urna. Praesent vitae leo sit amet libero efficitur auctor in a metus. Suspendisse quis pellentesque tellus, vel tristique lorem. Aliquam efficitur arcu ut aliquam efficitur. Praesent sit amet tortor ut erat mollis eleifend sed vel sapien.`,
  //   ],
  //   price: generateRandomNumber(50, 250),
  //   imageListing: generateImageAddress(10, false),
  //   imageFull: [generateImageAddress(10, true), generateImageAddress(10, true)],
  //   colors: generateAwailibleColors(generateRandomNumber(1, 7)),
  //   sizes: generateAwailibleSizes(true),
  // },
];
