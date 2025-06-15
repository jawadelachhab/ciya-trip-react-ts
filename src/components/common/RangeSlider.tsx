import { useEffect, useRef } from "react";
import rangeSlider from "range-slider-input"; 
import "range-slider-input/dist/style.css"; 

type RangeSliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number]; 
  onChange?: (values: [number, number], userInteraction: boolean) => void; 
}

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value = [25, 75], 
  onChange,
}:RangeSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstanceRef = useRef<ReturnType<typeof rangeSlider> | null>(null); 

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstanceRef.current = rangeSlider(sliderRef.current, {
        min,
        max,
        step,
        value,
        onInput: (values: number[], userInteraction: boolean) => {
          if (onChange) {
            onChange(values as [number, number], userInteraction); // Cast to tuple
          }
        },
      });
    }

    return () => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.removeGlobalEventListeners();
      }
    };
  }, [min, max, step, value, onChange]);

  return <div className="range-slider" ref={sliderRef} />;
};

export default RangeSlider;
