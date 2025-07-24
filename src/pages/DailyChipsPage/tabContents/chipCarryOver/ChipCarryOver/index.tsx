import { useGetSymbolHistoryQuery } from '@/states/futuresOp/futuresOpApiSlice';

import './chipCarryOver.scss';

const ChipCarryOver = () => {
  const { data, isLoading, error } = useGetSymbolHistoryQuery();

  if (isLoading) {
    return <div>Loading symbol history...</div>;
  }

  if (error) {
    return <div>Error loading symbol history: {error.toString()}</div>;
  }

  if (!data) {
    return <div>No symbol history data available</div>;
  }

  return (
    <div>
      <h2>Chip Carry Over</h2>
      <div className="symbol-history-info">
        {data.bars.length > 0 && (
          <div className="latest-bar-info">
            <h4>台指期(日盤)</h4>
            {/* <p>時間: {new Date(data.bars[data.bars.length - 1].time).toLocaleString()}</p> */}
            <p className='volume'>{data.bars[data.bars.length - 1].volume}</p>
            <div className="info-value-container">
              <p>
                <div className='title'>開盤</div> 
                <div className='value'>{data.bars[data.bars.length - 1].open}</div>
              </p>
              <p>
                <div className='title high'>最高</div> 
                <div className='value'>{data.bars[data.bars.length - 1].high}</div>
              </p>
              <p>
                <div className='title low'>最低</div> 
                <div className='value'>{data.bars[data.bars.length - 1].low}</div>
              </p>
              <p>
                <div className='title'>收盤</div> 
                <div className='value'>{data.bars[data.bars.length - 1].close}</div>
              </p>
            </div>            
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipCarryOver;
