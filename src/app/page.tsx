"use client";

import { useMemo, useState } from "react";

import Header from "@/components/MyComponents/header";
import FinalHeader from "@/components/MyComponents/headerFinalPage";
import Footer from "@/components/MyComponents/footer";
import FirstFormContant from "@/components/MyComponents/firstForm";
import SecondFormContant from "@/components/MyComponents/secondForm";
import ThirdFormContant from "@/components/MyComponents/thirdForm";

export default function Home() {
  const [scoresArray, setScoresArray] = useState([
    ...Array.from({ length: 8 }, () => 5),
    10,
    5,
    0,
  ]);

  const totalScore = useMemo(() => {
    const score = scoresArray.reduce((acc, val) => acc + val, 0);
    return score;
  }, [scoresArray]);

  const [step, setStep] = useState(1);

  const updateScoresArray = (index: number, value: number) => {
    const newArray = [...scoresArray];
    newArray[index] = value;
    setScoresArray(newArray);
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      {step < 4 && <Header />}
      {step === 4 && <FinalHeader />}
      {step === 1 && (
        <FirstFormContant
          nextStep={() => setStep(2)}
          scoresArray={scoresArray}
          updateScoresArray={updateScoresArray}
        />
      )}
      {step === 2 && (
        <SecondFormContant
          prevStep={() => setStep(1)}
          nextStep={() => setStep(3)}
          scoresArray={scoresArray}
          updateScoresArray={updateScoresArray}
        />
      )}
      {step === 3 && (
        <ThirdFormContant
          prevStep={() => setStep(2)}
          nextStep={() => setStep(4)}
          score={totalScore}
        />
      )}

      <Footer />
    </main>
  );
}
