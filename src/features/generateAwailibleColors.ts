const generateAwailibleColors = (count: number): string[] => {
  switch (count) {
    case 1:
      return ['bg-yellow-400'];
    case 2:
      return ['bg-green-400'];
    case 3:
      return ['bg-blue-400'];
    case 4:
      return ['bg-yellow-400', 'bg-green-400'];
    case 5:
      return ['bg-blue-400', 'bg-green-400'];
    case 6:
      return ['bg-blue-400', 'bg-yellow-400'];
    default:
      return ['bg-blue-400', 'bg-yellow-400', 'bg-green-400'];
  }
};

export default generateAwailibleColors;
