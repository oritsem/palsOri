import { Slider } from "../ui/slider";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface IQuestionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  index: number;
  defaultVal?: number[];
  scoresArray: number[];
  updateScoresArray: (index: number, value: number) => void;
}

interface IQuestionRadioProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  values: { val1: string; val2: string };
  scores: { score1: number; score2: number };
  index: number;
  scoresArray: number[];
  updateScoresArray: (index: number, value: number) => void;
}

const QuestionSlider = ({
  index,
  defaultVal,
  scoresArray,
  updateScoresArray,
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
        defaultValue={[scoresArray[index]]}
        min={1}
        max={10}
        className="pt-10 pb-2"
        dir="rtl"
        id="slider"
        onValueChange={(v) => updateScoresArray(index, v[0])}
      />
      <div className="flex justify-between items-center w-full pb-6 text-gray-500 font-inter text-sm font-semibold leading-7 tracking-tight">
        <p>בכלל לא מסכים</p>
        <p>מאוד מסכים</p>
      </div>
    </div>
  );
};

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
          scores.score1 === scoresArray[index] ? values.val1 : values.val2
        }
        className="my-10 w-1/2"
        onValueChange={() =>
          updateScoresArray(
            index,
            scores.score1 === scoresArray[index]
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

export { QuestionSlider, QuestionRadio };
