import React from 'react';
import ChipCard from '../ChipCard';

// TODO: remove mockChipData
const mockChipData = {
  dealer_mxf: {
    net_oi_volume: [-2001, -394, 2140, 3068, 2409, 2135, 594, 1553],
    oi_diff: [-1157, 1607, 2534, 928, -659, -274, -1541, 959]
  },
};

const ChipOverview: React.FC = () => {
  const chipName = 'dealer_mxf';

  return (
    <div>
      <h2>Chip Overview</h2>
      <p>This is the chip overview component.</p>
      <ChipCard 
        chipName={chipName}
        chipData={mockChipData[chipName]}
      />
    </div>
  );
};

export default ChipOverview;
