"use client";

import { useMemo, useState } from "react";
import { TScores } from "../utils/scores";

import Header from "@/components/MyComponents/header";
import Footer from "@/components/MyComponents/footer";
import FirstFormContant from "@/components/Pages/FirstPage/firstForm";
import SecondFormContant from "@/components/Pages/SecondPage/secondForm";
import ThirdFormContant from "@/components/Pages/ThirdPage/thirdForm";

const scoresDefaults: TScores = {
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
  const [scoresObject, setScoresObject] = useState<TScores>(scoresDefaults);

  const totalScore = useMemo(() => {
    const score = Object.values(scoresObject).reduce((acc, val) => acc + val, 0);
    return score;
  }, [scoresObject]);

  const [step, setStep] = useState(1);

  const updateScoresObject = (key: keyof TScores, value: number) => {
    setScoresObject((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      {step === 4 ? <Header isLastPage={true} /> : <Header />}

      {step === 1 && (
        <FirstFormContant
          nextStep={() => setStep(2)}
          scoresObject={scoresObject}
          updateScoresObject={updateScoresObject}
        />
      )}
      {step === 2 && (
        <SecondFormContant
          prevStep={() => setStep(1)}
          nextStep={() => setStep(3)}
          scoresObject={scoresObject}
          updateScoresObject={updateScoresObject}
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
