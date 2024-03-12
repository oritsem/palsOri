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

import { z } from "zod";
import { ChangeEvent, useState } from "react";

interface IThirdFormProps {
  prevStep: () => void;
  nextStep: () => void;
  score: number;
}

const UserDetailsSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  address: z.string().min(1, "Address is required"),
});

interface FormFields {
  fullName: string;
  phoneNumber: string;
  address: string;
}

const initialFormState: FormFields = {
  fullName: "",
  phoneNumber: "",
  address: "",
};

const ThirdFormContant = ({ prevStep, nextStep, score }: IThirdFormProps) => {
  const [form, setForm] = useState<FormFields>(initialFormState);

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.id} : ${e.target.value}`);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the form
    const result = UserDetailsSchema.safeParse(form);

    console.log(
      `form = ${form.fullName} | ${form.phoneNumber} | ${form.address}`
    );
    console.log(`res = ${result.success}`);

    if (result.success) {
      nextStep();
    }
  };

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
            onChange={handleForm}
            id="fullName"
            name="fullName"
            placeholder="שם מלא"
            className="mb-5"
          />

          <Label>מספר טלפו</Label>
          <Input
            onChange={handleForm}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="מספר טלפו"
            className="mb-5"
          />

          <Label>כתובת</Label>
          <Input
            onChange={handleForm}
            id="address"
            name="address"
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
            onClick={handleSubmit}
          >
            שלח
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ThirdFormContant;
