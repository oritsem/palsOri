import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { QuestionSlider } from "./questions";
import { Button } from "./button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IStartFormProps {
  nextStep: () => void;
  // setScore: Dispatch<SetStateAction<number>>;
  questions: string[];
  sliderValues: number[];
  setSliderValues: Dispatch<SetStateAction<number[]>>;
}

// const questions = [
//   "האם אתה חושב שיש לך בעיית משמעת עצמית וקשה לך להביא את עצמך לאימון?",
//   "האם אתה מרגיש שאתה סובל מעודף משקל?",
//   "האם אתה מרגיש עייף במשך היום?",
//   "האם אתה חוזר מאוחר וכבר אין לך חשק לצאת?",
//   "האם חשוב לך יחס אישי?",
//   "האם חשוב לך להתאמן בפיקוח בהתאם ליכולות שלך?",
//   "האם אתה אוהב לעשות ספורט?",
//   "האם חשוב לך לשפר את הישגיך הספורטיביים?",
// ];

const FirstFormContant = ({
  nextStep,
  // setScore,
  questions,
  sliderValues,
  setSliderValues,
}: IStartFormProps) => {
  // const [sliderValues, setSliderValues] = useState(
  //   Array.from({ length: questions.length }, () => 5)
  // );

  // const sum = sliderValues.reduce((acc, value) => acc + value, 0);
  // useEffect(() => {
  //   setScore(sum);
  // }, []);

  return (
    <div className="px-4 w-full bg-gray-50 h-auto flex justify-center items-center text-center p-10">
      <Card>
        <CardHeader>
          <CardTitle>בואו נתחיל!</CardTitle>
          <CardDescription className="text-gray-700 text-28 font-inter text-xl font-semibold leading-9 tracking-tight text-center">
            דרג את השאלות הבאות כדי לגלות אם אתה זקוק למאמן כושר אישי
          </CardDescription>
        </CardHeader>
        <CardContent>
          {questions.map((question, index) => (
            <QuestionSlider
              key={index}
              index={index}
              sliderValues={sliderValues}
              setSliderValues={setSliderValues}
              defaultVal={[sliderValues[index]]}
            >
              {question}
            </QuestionSlider>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button bgcolor="gradient" className="ml-20 mr-20" onClick={nextStep}>
            המשך
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FirstFormContant;
