import { useGetChipUnifyTableQuery } from '@/states/marketInsight/marketInsightApiSlice';
import ChipCard from '../ChipCard';

import './chipOverview.scss';

const ChipOverview = () => {
  const { data, isLoading, error } = useGetChipUnifyTableQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h2>Chip Overview</h2>
      <div className='chip-cards-container'>
        {
          Object.keys(data).map((chipName) => {
            return <ChipCard key={chipName} chipName={chipName} oiDiffByDates={data[chipName]} />;
          })
        }
      </div>
    </div>
  );
};

export default ChipOverview;
