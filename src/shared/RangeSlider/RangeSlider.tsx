import React from 'react';
import clsx from 'clsx';
import './RangeSlider.css';
import { IRangeSlider } from './interfaces';

export const RangeSlider: React.FC<IRangeSlider> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = React.useState(min);
  const [maxVal, setMaxVal] = React.useState(max);

  const minValRef = React.useRef(null);
  const maxValRef = React.useRef(null);
  const range = React.useRef(null);

  const getPercent = React.useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  React.useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  React.useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  React.useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+ev.target.value, maxVal - 1);
          setMinVal(value);
          ev.target.value = value.toString();
        }}
        className={clsx(minVal > max - 100 ? 'z-50' : 'z-30')}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+ev.target.value, minVal + 1);
          setMaxVal(value);
          ev.target.value = value.toString();
        }}
        className="z-40"
      />
      <div className="w-[200px] relative">
        <div className="w-full h-1 bg-b-100 rounded-sm z-10 absolute" />
        <div ref={range} className="h-1 bg-b-300 rounded-sm absolute z-20" />
      </div>
    </>
  );
};
