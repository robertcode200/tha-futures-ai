import type { OiDiffByDate } from '../types';
import { getValueUpDownColor } from "@/utils";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

type ChipCardBarChartProps = {
    oiDiffByDates: OiDiffByDate[];
};

const chipCardBarChartConfig = {
    barCharWidth: 240,
    barChartHeight: 80,
};

const ChipCardBarChart = ({
  oiDiffByDates,
}: ChipCardBarChartProps) => {
  if (!oiDiffByDates || oiDiffByDates.length === 0) {
    return null;
  }

  const { barCharWidth, barChartHeight } = chipCardBarChartConfig;
  // TODO: convert date format to MM/DD
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={barCharWidth} height={barChartHeight} data={oiDiffByDates}>
        <Bar dataKey="oiDiff">
          {oiDiffByDates.map((oiDiffByDate, index) => (
            <Cell key={index} fill={getValueUpDownColor(oiDiffByDate?.oiDiff || 0)} />
          ))}
        </Bar>
        <Tooltip />
        <XAxis dataKey="date" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChipCardBarChart;
