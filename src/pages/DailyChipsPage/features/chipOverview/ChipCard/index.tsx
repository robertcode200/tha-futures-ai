import type { ChipData } from '@/states/marketInsight/types';
import { getValueColor } from '@/utils';

import './chipCard.scss'
type ChipCardProps ={
  chipName: string; // TODO: chipName as const enum
  chipData: ChipData;
};

const getLatestOiDiffText = (latestOiDiff: number) => {
  const latestOiDiffUpDown = latestOiDiff > 0 ? '+' : '-';

  // TODO: latestOiDiffUnit
  const latestOiDiffUnit = '';

  return `${latestOiDiffUpDown}${latestOiDiff}${latestOiDiffUnit}`;
};

const ChipCard = ({ chipName, chipData }: ChipCardProps) => {
  const { oi_diff } = chipData;
  const latestOiDiff = oi_diff[oi_diff.length - 1];
  const latestOiDiffColor = getValueColor(latestOiDiff);
  const latestOiDiffText = getLatestOiDiffText(latestOiDiff);

  return (
    <div className="chip-card">
      <div className="chip-card-left-side">
        <div>{chipName}</div>
        <div style={{ color: latestOiDiffColor }}>{latestOiDiffText}</div>
      </div>
      <div className="chip-card-right-side">
        <p>Chip Card Content</p>
      </div>
    </div>
  );
};

export default ChipCard;
