import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "./button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Score } from "./score";
import { handleChange } from "@/Handlers/handlers";

interface IThirdFormProps {
  prevStep: () => void;
  nextStep: () => void;
  score: number;
}

const ThirdFormContant = ({ prevStep, nextStep, score }: IThirdFormProps) => {
  const finalText =
    score > 50
      ? "בהתאם לציון שקבלת בשאלון  מאמן כושר אישי יעזור לך להתאמן בקביעות, לשפר את השיגך ולתרום רבות לבריאותך"
      : 'ע"פ הציון שקבלת גם אם תתאמן ללא מאמן כושר אישי תוכל להשיג את המטרות שהצבת לעצמך. אם בכל זאת אתה מעוניין במאמן כושר אישי לחץ {כאן} ואנו נפנה אליך מאזוריך מאמן מעולה שיעזור לך להגשים את מטרותיך ולשפר את בריאותך';
  return (
    <div className="px-4 w-full bg-gray-50 h-auto flex justify-center items-center text-center p-10">
      <Card>
        <CardHeader>
          <div className="flex justify-center items-center mb-10">
            <Score score={score} />
          </div>

          <CardTitle>{finalText}</CardTitle>
          <CardDescription className="text-gray-700 text-28 font-inter text-xl font-semibold leading-9 tracking-tight text-center">
            מלא את פרטיך ומאמן כושר אישי יחזור אליך
          </CardDescription>
        </CardHeader>
        <CardContent className="w-1/2 mx-auto justify-center items-center text-right">
          <Label>שם מלא</Label>
          <Input
            onChange={handleChange}
            id="firstName"
            placeholder="שם מלא"
            className="mb-5"
          />

          <Label>מספר טלפו</Label>
          <Input
            onChange={handleChange}
            id="phoneNumber"
            placeholder="מספר טלפו"
            className="mb-5"
          />

          <Label>כתובת</Label>
          <Input
            onChange={handleChange}
            id="address"
            placeholder="כתובת"
            className="mb-5"
          />
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
            שלח
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThirdFormContant;
