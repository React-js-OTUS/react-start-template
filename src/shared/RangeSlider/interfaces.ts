export interface IRangeSliderChange {
  min: number;
  max: number;
}

export interface IRangeSlider {
  min: number;
  max: number;
  onChange: ({ min, max }: IRangeSliderChange) => void;
}
