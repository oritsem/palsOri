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

const questions = {
  q1: "האם אתה חושב שיש לך בעיית משמעת עצמית וקשה לך להביא את עצמך לאימון?",
  q2: "האם אתה מרגיש שאתה סובל מעודף משקל?",
  q3: "האם אתה מרגיש עייף במשך היום?",
  q4: "האם אתה חוזר מאוחר וכבר אין לך חשק לצאת?",
  q5: "האם חשוב לך יחס אישי?",
  q6: "האם חשוב לך להתאמן בפיקוח בהתאם ליכולות שלך?",
  q7: "האם אתה אוהב לעשות ספורט?",
  q8: "האם חשוב לך לשפר את הישגיך הספורטיביים?",
};

interface IStartFormProps {
  nextStep: () => void;
  scoresArray: number[];
  updateScoresArray: (index: number, value: number) => void;
}

const FirstFormContant = ({
  nextStep,
  scoresArray,
  updateScoresArray,
}: IStartFormProps) => {
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
          {Object.values(questions).map((question, index) => (
            <QuestionSlider
              key={index}
              index={index}
              defaultVal={[scoresArray[index]]}
              scoresArray={scoresArray}
              updateScoresArray={updateScoresArray}
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
