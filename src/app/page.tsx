"use client";

import { useMemo, useState } from "react";
import { TScores } from "../utils/scores";

import Header from "@/components/MyComponents/header";
import Footer from "@/components/MyComponents/footer";
import FirstFormContant from "@/components/Pages/FirstPage/firstForm";
import SecondFormContant from "@/components/Pages/SecondPage/secondForm";
import ThirdFormContant from "@/components/Pages/ThirdPage/thirdForm";

const scoresObject: TScores = {
  q0: 5,
  q1: 5,
  q2: 5,
  q3: 5,
  q4: 5,
  q5: 5,
  q6: 5,
  q7: 5,
  q8: 10,
  q9: 5,
  q10: 0,
};

export default function Home() {
  const [scoresArray, setScoresArray] = useState<TScores>(scoresObject);

  const totalScore = useMemo(() => {
    const score = Object.values(scoresArray).reduce((acc, val) => acc + val, 0);
    return score;
  }, [scoresArray]);

  const [step, setStep] = useState(1);

  const updateScoresArray = (key: keyof TScores, value: number) => {
    setScoresArray((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      {step === 4 ? <Header isLastPage={true} /> : <Header />}

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
