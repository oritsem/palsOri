import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  console.log(`${event.target.id} : ${event.target.value}`);
};

const handleRadioGroupChange = (value: string) => {
  console.log(`Radio value : ${value}`);
};

const handleRadioGroupChange2 = (
  value: string,
  values: {
    val1: string;
    val2: string;
  },
  scores: {
    score1: number;
    score2: number;
  },
  index: number,
  radioValues: number[],
  setRadioValues: Dispatch<SetStateAction<number[]>>
) => {
  const newRadioValues = [...radioValues];

  if (value === values.val1) {
    newRadioValues[index] = scores.score1;
    setRadioValues(newRadioValues);
  } else {
    newRadioValues[index] = scores.score2;
    setRadioValues(newRadioValues);
  }
  console.log(`Radio value : ${value}`);
};

const handleSliderChange = (
  value: number | number[],
  index: number,
  sliderValues: number[],
  setSliderValues: Dispatch<SetStateAction<number[]>>
) => {
  const newSliderValues = [...sliderValues];
  newSliderValues[index] = parseInt(`${value}`);
  setSliderValues(newSliderValues);
};

export {
  handleChange,
  handleRadioGroupChange,
  handleRadioGroupChange2,
  handleSliderChange,
};
