import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Score } from "./score";
import { handleAddressSync, formSchema } from "../../../utils/handleAddressSync";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";

interface IThirdFormProps {
  prevStep: () => void;
  nextStep: () => void;
  score: number;
}

const ThirdFormContant = ({ prevStep, nextStep, score }: IThirdFormProps) => {
  // Form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
    },
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    nextStep();
  }

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
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שם מלא</FormLabel>
                    <FormControl>
                      <Input placeholder="שם מלא" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>מספר טלפון</FormLabel>
                    <FormControl>
                      <Input placeholder="מספר טלפון" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>כתובת</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="כתובת"
                        {...field}
                        onChange={(e) => handleAddressSync(form, e)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button
                  className="bg-gradient-to-r from-red-500 to-pink-300 ml-20 mr-20 w-[144px] h-[40px] px-8 py-8 rounded-md"
                  onClick={prevStep}
                >
                  חזור
                </Button>
                <Button
                  className="bg-gradient-to-r from-red-500 to-pink-300 ml-20 mr-20 w-[144px] h-[40px] px-8 py-8 rounded-md"
                  type="submit"
                >
                  שלח
                </Button>
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdFormContant;
