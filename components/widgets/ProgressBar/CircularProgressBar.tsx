import { getRangeColorByScore } from '@/utils/utils';

type Props = {
  percentage?: number;
  sqSize?: number;
  strokeWidth?: number;
};

const CircularProgress: React.FC<Props> = ({
  sqSize = 100,
  percentage = 0,
  strokeWidth = 5,
}) => {
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose circle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background fill-none stroke-gray-slate-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={`circle-progress fill-none ${
          getRangeColorByScore(percentage).strokeColor
        } stroke-linecap-round stroke-linejoin-round`}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className={`circle-text text-3xl font-bold ${
          getRangeColorByScore(percentage).fillColor
        }`}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
