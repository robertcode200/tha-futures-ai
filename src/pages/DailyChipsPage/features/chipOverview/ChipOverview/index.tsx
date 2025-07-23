import React from 'react';
import ChipCard from '../ChipCard';

// TODO: remove mockChipData
const mockChipData = {
  dealer_mxf: [
      {
        date: '2025-07-15',
        oiDiff: 1607,
      },
      {
        date: '2025-07-16',
        oiDiff: 2534,
      },
      {
        date: '2025-07-17',
        oiDiff: 928,
      }
      ,{
        date: '2025-07-18',
        oiDiff: -659,
      },
      {
        date: '2025-07-21',
        oiDiff: -274,
      },
      {
        date: '2025-07-22',
        oiDiff: -1541,
      },
      {
        date: '2025-07-23',
        oiDiff: 959,
      },
  ],
};

const ChipOverview: React.FC = () => {
  const chipName = 'dealer_mxf';

  return (
    <div>
      <h2>Chip Overview</h2>
      <p>This is the chip overview component.</p>
      <ChipCard 
        chipName={chipName}
        oiDiffByDates={mockChipData[chipName]}
      />
    </div>
  );
};

export default ChipOverview;
