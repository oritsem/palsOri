import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { QuestionRadio } from "./questions";
import { Button } from "./button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ISecondFormProps {
  prevStep: () => void;
  nextStep: () => void;
  // setScore: Dispatch<SetStateAction<number>>;
  radioValues: number[];
  setRadioValues: Dispatch<SetStateAction<number[]>>;
}

const SecondFormContant = ({
  prevStep,
  nextStep,
  // setScore,
  radioValues,
  setRadioValues,
}: ISecondFormProps) => {
  // const [radioValues, setRadioValues] = useState([10, 0, 0]);

  // const sum = radioValues.reduce((acc, value) => acc + value, 0);
  // useEffect(() => {
  //   setScore(sum);
  // }, []);

  return (
    <div className="px-4 w-full bg-gray-50 h-auto flex justify-center items-center text-center p-10">
      <Card>
        <CardHeader>
          <CardTitle>תכף מסיימים...</CardTitle>
          <CardDescription className="text-gray-700 text-28 font-inter text-xl font-semibold leading-9 tracking-tight text-center">
            ענה על מספר שאלות נוספות כדי שנוכל להתאים לך מאמן מתאים
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-10">
          <QuestionRadio
            values={{ val1: "לא", val2: "כן" }}
            scores={{ score1: 10, score2: 5 }}
            index={0}
            radioValues={radioValues}
            setRadioValues={setRadioValues}
          >
            האם יש לך מנוי לחדר כושר?
          </QuestionRadio>

          <QuestionRadio
            values={{ val1: "לא", val2: "כן" }}
            scores={{ score1: 0, score2: 5 }}
            index={1}
            radioValues={radioValues}
            setRadioValues={setRadioValues}
          >
            האם הרופא אמר לך שאתה חייב לשפר את הכושר ולהתחיל להתאמן?
          </QuestionRadio>

          <QuestionRadio
            values={{ val1: "בקבוצה", val2: "לבד" }}
            scores={{ score1: 0, score2: 5 }}
            index={2}
            radioValues={radioValues}
            setRadioValues={setRadioValues}
          >
            איך אתה מעדיף להתאמן?
          </QuestionRadio>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            bgcolor={"gradient"}
            className="ml-20 mr-20"
            onClick={prevStep}
          >
            חזור
          </Button>
          <Button
            bgcolor={"gradient"}
            className="ml-20 mr-20"
            onClick={nextStep}
          >
            המשך
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SecondFormContant;
