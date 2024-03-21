import { Slider } from "../../ui/slider";
import { TScores } from "../../../utils/scores";

interface IQuestionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  index: number;
  defaultVal?: number[];
  scoresObject: TScores;
  updateScoresObject: (key: keyof TScores, value: number) => void;
}

const QuestionSlider = ({
  index,
  defaultVal,
  scoresObject,
  updateScoresObject,
  className,
  ...props
}: IQuestionProps) => {
  return (
    <div className="flex flex-col items-center">
      <p
        {...props}
        className={`font-inter text-xl font-semibold leading-7 tracking-tight text-right ${className}`}
      />
      <Slider
        defaultValue={[scoresObject[`q${index}` as keyof TScores]]}
        min={1}
        max={10}
        className="pt-10 pb-2"
        dir="rtl"
        id="slider"
        onValueChange={(v) =>
          updateScoresObject(`q${index}` as keyof TScores, v[0])
        }
      />
      <div className="flex justify-between items-center w-full pb-6 text-gray-500 font-inter text-sm font-semibold leading-7 tracking-tight">
        <p>בכלל לא מסכים</p>
        <p>מאוד מסכים</p>
      </div>
    </div>
  );
};

export { QuestionSlider };
