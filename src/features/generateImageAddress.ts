const generateImageAddress = (id: number, isBig: boolean): string =>
  `https://github.com/furtivite/cdn.furtivite.github.io/blob/main/images/goods/${id}/${
    isBig ? 'big' : 'small'
  }.png?raw=true`;

export default generateImageAddress;
