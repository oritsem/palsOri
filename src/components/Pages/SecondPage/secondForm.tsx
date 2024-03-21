import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { QuestionRadio } from "./questionsRadio";
import { Button } from "../../ui/button";
import { TScores } from "../../../utils/scores";

interface ISecondFormProps {
  prevStep: () => void;
  nextStep: () => void;
  scoresObject: TScores;
  updateScoresObject: (key: keyof TScores, value: number) => void;
}

const SecondFormContant = ({
  prevStep,
  nextStep,
  scoresObject,
  updateScoresObject,
}: ISecondFormProps) => {
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
            index={8}
            scoresObject={scoresObject}
            updateScoresObject={updateScoresObject}
          >
            האם יש לך מנוי לחדר כושר?
          </QuestionRadio>

          <QuestionRadio
            values={{ val1: "לא", val2: "כן" }}
            scores={{ score1: 0, score2: 5 }}
            index={9}
            scoresObject={scoresObject}
            updateScoresObject={updateScoresObject}
          >
            האם הרופא אמר לך שאתה חייב לשפר את הכושר ולהתחיל להתאמן?
          </QuestionRadio>

          <QuestionRadio
            values={{ val1: "בקבוצה", val2: "לבד" }}
            scores={{ score1: 0, score2: 5 }}
            index={10}
            scoresObject={scoresObject}
            updateScoresObject={updateScoresObject}
          >
            איך אתה מעדיף להתאמן?
          </QuestionRadio>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-gradient-to-r from-red-500 to-pink-300 ml-20 mr-20 w-[144px] h-[40px] px-8 py-8 rounded-md"
            onClick={prevStep}
          >
            חזור
          </Button>
          <Button
            className="bg-gradient-to-r from-red-500 to-pink-300 ml-20 mr-20 w-[144px] h-[40px] px-8 py-8 rounded-md"
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
