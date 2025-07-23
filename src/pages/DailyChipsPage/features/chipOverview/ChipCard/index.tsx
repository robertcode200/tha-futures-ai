import { getValueUpDownColor } from '@/utils';

import ChipCardBarChart from '../ChipCardBarChart';
import type { OiDiffByDate } from '../types';

import './chipCard.scss'

type ChipCardProps ={
  chipName: string; // TODO: chipName as const enum
  oiDiffByDates: OiDiffByDate[];
};

const getLatestOiDiffText = (latestOiDiff: number) => {
  const latestOiDiffUpDown = latestOiDiff > 0 ? '+' : '-';

  // TODO: latestOiDiffUnit
  const latestOiDiffUnit = '';

  return `${latestOiDiffUpDown}${latestOiDiff}${latestOiDiffUnit}`;
};

const ChipCard = ({ chipName, oiDiffByDates }: ChipCardProps) => {
  if (!oiDiffByDates || oiDiffByDates.length === 0) {
    return null;
  }

  const { oiDiff: latestOiDiff } = oiDiffByDates[oiDiffByDates.length - 1];
  const latestOiDiffColor = getValueUpDownColor(latestOiDiff);
  const latestOiDiffText = getLatestOiDiffText(latestOiDiff);

  const chipNameText = chipName || 'N/A';

  return (
    <div className="chip-card">
      <div className="chip-card-left-side">
        <div>{chipNameText}</div>
        <div style={{ color: latestOiDiffColor }}>{latestOiDiffText}</div>
      </div>
      <div className="chip-card-right-side">
        <ChipCardBarChart oiDiffByDates={oiDiffByDates} />
      </div>
    </div>
  );
};

export default ChipCard;
