import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { TScores } from "../../../utils/scores";

interface IQuestionRadioProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  values: { val1: string; val2: string };
  scores: { score1: number; score2: number };
  index: number;
  scoresArray: TScores;
  updateScoresArray: (key: keyof TScores, value: number) => void;
}

const QuestionRadio = ({
  values,
  scores,
  index,
  scoresArray,
  updateScoresArray,
  className,
  ...props
}: IQuestionRadioProps) => {
  return (
    <div className="flex flex-col">
      <p
        {...props}
        className={`font-inter text-xl font-semibold leading-7 tracking-tight text-right my-5 ${className}`}
      />

      <RadioGroup
        defaultValue={
          scores.score1 === scoresArray[`q${index}` as keyof TScores]
            ? values.val1
            : values.val2
        }
        className="my-10 w-1/2"
        onValueChange={() =>
          updateScoresArray(
            `q${index}` as keyof TScores,
            scores.score1 === scoresArray[`q${index}` as keyof TScores]
              ? scores.score2
              : scores.score1
          )
        }
      >
        <div className="w-full flex justify-center items-center">
          <div className="mx-10">
            <Label className="p-2">{values.val1}</Label>
            <RadioGroupItem value={values.val1} id="r1" />
          </div>
          <div className="mx-10">
            <Label className="p-2">{values.val2}</Label>
            <RadioGroupItem value={values.val2} id="r2" />
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export { QuestionRadio };
