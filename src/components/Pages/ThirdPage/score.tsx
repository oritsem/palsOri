interface IProps {
  score: number;
}

export const Score = ({ score }: IProps) => {
  // Calculate the angle based on the score
  const angle = ((score === 100 ? 99.9 : score) / 100) * 360;
  // Calculate the end coordinates of the arc
  const x = 109 + 100 * Math.cos((angle - 90) * (Math.PI / 180));
  const y = 109 + 100 * Math.sin((angle - 90) * (Math.PI / 180));
  // Define the arc command
  const arcCommand = angle <= 180 ? "0" : "1";
  // Construct the path data
  const pathData = `M 109 9 A 100 100 0 ${arcCommand} 1 ${x} ${y}`;

  return (
    <svg width="218" height="217">
      <circle
        cx="109"
        cy="109"
        r="100"
        fill="transparent"
        stroke="rgba(249, 77, 86, 0.30)"
        strokeWidth="17"
      />
      <path
        d={pathData}
        fill="transparent"
        stroke="rgba(249, 77, 80, 1)"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="109"
        y="120"
        textAnchor="middle"
        dy="7"
        className="text-6xl	text-center"
      >
        {score}
      </text>
    </svg>
  );
};
