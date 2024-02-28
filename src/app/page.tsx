"use client";

import Header from "@/components/MyComponents/header";
import Footer from "@/components/MyComponents/footer";
import FirstFormContant from "@/components/MyComponents/firstForm";
import SecondFormContant from "@/components/MyComponents/secondForm";
import * as Images from "@/images";
import { useState } from "react";
import ThirdFormContant from "@/components/MyComponents/thirdForm";
import FinalHeader from "@/components/MyComponents/headerFinalPage";

const logo = Images.logo.src;

const header_images = [Images.image2.src, Images.image1.src, Images.image3.src];
const footer_images = [
  { image: Images.people.src, title: "מספר הצעות" },
  { image: Images.location.src, title: "מבוסס מיקום" },
  { image: Images.clock.src, title: "אוטומטי ומיידי" },
];

const questions = [
  "האם אתה חושב שיש לך בעיית משמעת עצמית וקשה לך להביא את עצמך לאימון?",
  "האם אתה מרגיש שאתה סובל מעודף משקל?",
  "האם אתה מרגיש עייף במשך היום?",
  "האם אתה חוזר מאוחר וכבר אין לך חשק לצאת?",
  "האם חשוב לך יחס אישי?",
  "האם חשוב לך להתאמן בפיקוח בהתאם ליכולות שלך?",
  "האם אתה אוהב לעשות ספורט?",
  "האם חשוב לך לשפר את הישגיך הספורטיביים?",
];

export default function Home() {
  const [step, setStep] = useState(1);
  // const [scoreFirstForm, setScoreFirstForm] = useState(0);
  // const [scoreSecondForm, setScoreSecondForm] = useState(0);

  const [sliderValues, setSliderValues] = useState(
    Array.from({ length: questions.length }, () => 5)
  );
  const [radioValues, setRadioValues] = useState([10, 0, 0]);

  const scoreFirstForm = sliderValues.reduce((acc, value) => acc + value, 0);
  const scoreSecondForm = radioValues.reduce((acc, value) => acc + value, 0);
  const score = scoreFirstForm + scoreSecondForm;

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      {step < 4 && <Header logo={logo} images={header_images} />}
      {step === 4 && <FinalHeader logo={logo} images={header_images} />}
      {step === 1 && (
        <FirstFormContant
          nextStep={() => setStep(2)}
          // setScore={setScoreFirstForm}
          questions={questions}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
        />
      )}
      {step === 2 && (
        <SecondFormContant
          prevStep={() => setStep(1)}
          nextStep={() => setStep(3)}
          // setScore={setScoreSecondForm}
          radioValues={radioValues}
          setRadioValues={setRadioValues}
        />
      )}
      {step === 3 && (
        <ThirdFormContant
          prevStep={() => setStep(2)}
          nextStep={() => setStep(4)}
          score={score}
        />
      )}

      <Footer images={footer_images} />
    </main>
  );
}
