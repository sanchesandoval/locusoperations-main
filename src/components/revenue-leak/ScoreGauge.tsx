import { motion } from "framer-motion";

interface Props {
  score: number;
}

const ScoreGauge = ({ score }: Props) => {
  const maxScore = 12;
  const ratio = score / maxScore;
  // Needle angle: -90 (left/green) to +90 (right/red)
  const needleAngle = -90 + ratio * 180;

  const getZone = () => {
    if (score <= 4)
      return {
        label: "Low Risk",
        color: "text-green-400",
        message:
          "Your pipeline has solid foundations. A few targeted fixes could unlock significant revenue.",
      };
    if (score <= 8)
      return {
        label: "Moderate Risk",
        color: "text-yellow-400",
        message:
          "Your pipeline has serious gaps. You're likely losing $3-6K/month in revenue that's fixable.",
      };
    return {
      label: "Critical",
      color: "text-destructive",
      message:
        "Critical. Your pipeline is bleeding revenue at nearly every stage. Most businesses at this score are losing 30-40% of potential appointments.",
    };
  };

  const zone = getZone();

  // SVG arc helper
  const arc = (startAngle: number, endAngle: number) => {
    const cx = 150, cy = 150, r = 120;
    const toRad = (a: number) => ((a - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  return (
    <div className="text-center space-y-4">
      <div className="relative inline-block">
        <svg viewBox="0 0 300 180" className="w-64 sm:w-80 mx-auto">
          {/* Green arc: 0-4 → -90° to -30° → mapped to 180° to 240° */}
          <path
            d={arc(-90, -30)}
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Yellow arc: 4-8 → -30° to 30° → mapped */}
          <path
            d={arc(-30, 30)}
            fill="none"
            stroke="hsl(48, 96%, 53%)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Red arc: 8-12 → 30° to 90° */}
          <path
            d={arc(30, 90)}
            fill="none"
            stroke="hsl(0, 84%, 60%)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Needle */}
          <motion.line
            x1="150"
            y1="150"
            x2="150"
            y2="45"
            stroke="hsl(var(--foreground))"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ originX: "150px", originY: "150px" }}
            initial={{ rotate: -90 }}
            animate={{ rotate: needleAngle }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Center dot */}
          <circle cx="150" cy="150" r="6" fill="hsl(var(--foreground))" />
        </svg>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-1">Your Leak Score</p>
        <p className={`text-5xl font-bold ${zone.color}`}>
          {score}
          <span className="text-xl text-muted-foreground">/12</span>
        </p>
        <p className={`text-lg font-semibold mt-1 ${zone.color}`}>{zone.label}</p>
      </div>

      <p className="text-muted-foreground max-w-lg mx-auto">{zone.message}</p>
    </div>
  );
};

export default ScoreGauge;
