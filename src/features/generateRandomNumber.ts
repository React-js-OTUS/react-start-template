const generateRandomNumber = (max: number, min: number): number => Math.floor(Math.random() * (max - min)) + min;

export default generateRandomNumber;
