export enum ELogoType {
  LIGHT = 'light',
  DARK = 'dark',
  NOBORDER = 'no-border',
}

export interface ILogo {
  type: ELogoType;
  text: string;
}
