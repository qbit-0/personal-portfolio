import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const DEVICE_PRESETS = [
  "mobile_s",
  "mobile_m",
  "mobile_l",
  "tablet",
  "laptop",
  "laptop_l",
  "4k",
] as const;
type DevicePreset = typeof DEVICE_PRESETS[number];

export const PRESET_LABELS: Record<DevicePreset, string> = {
  mobile_s: "Mobile S",
  mobile_m: "Mobile M",
  mobile_l: "Mobile L",
  tablet: "Tablet",
  laptop: "Laptop",
  laptop_l: "Laptop L",
  "4k": "4K",
};

export const PRESET_WIDTHS: Record<DevicePreset, number> = {
  mobile_s: 320,
  mobile_m: 375,
  mobile_l: 425,
  tablet: 768,
  laptop: 1024,
  laptop_l: 1440,
  "4k": 2560,
};

export const DEFAULT_PRESET: DevicePreset = "mobile_l";

export const MIN_DIM = 320;
export const MAX_DIM = 2560;

const WIDTH_MARKS = Object.entries(PRESET_WIDTHS).map(([preset, width]) => {
  if (["mobile_s", "tablet", "laptop_l", "4k"].includes(preset)) {
    return { value: width, label: `${width}px` };
  } else {
    return {
      value: width,
    };
  }
});

type Props = {
  targetWidth: number;
  setTargetWidth: Dispatch<SetStateAction<number>>;
};

const SampleControls: React.FC<Props> = ({ targetWidth, setTargetWidth }) => {
  const [preset, setPreset] = useState<DevicePreset>(DEFAULT_PRESET);

  const handlePresetClick = (value: DevicePreset) => () => {
    setPreset(value);
    setTargetWidth(PRESET_WIDTHS[value]);
  };

  useEffect(() => {
    Object.entries(PRESET_WIDTHS).forEach(([value, deviceWidth], index) => {
      if (targetWidth >= deviceWidth) setPreset(value as DevicePreset);
    });
  }, [targetWidth]);

  const handleWidthSliderChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setTargetWidth(value);
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 4, pt: 6 }}>
      <Slider
        value={targetWidth}
        min={MIN_DIM}
        max={MAX_DIM}
        step={1}
        marks={WIDTH_MARKS}
        valueLabelDisplay="on"
        valueLabelFormat={(number) => `${number}px`}
        onChange={handleWidthSliderChange}
      />
      <RadioGroup value={preset} row>
        {Object.entries(PRESET_LABELS).map(([value, label], index) => {
          const devicePreset = value as DevicePreset;
          return (
            <FormControlLabel
              key={index}
              value={devicePreset}
              control={<Radio />}
              label={label}
              onClick={handlePresetClick(devicePreset)}
            />
          );
        })}
      </RadioGroup>
    </Paper>
  );
};

export default SampleControls;
