import { useGetSymbolHistoryQuery } from '@/states/futuresOp/futuresOpApiSlice';

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
            <p>時間: {new Date(data.bars[data.bars.length - 1].time).toLocaleString()}</p>
            <p>開盤: {data.bars[data.bars.length - 1].open}</p>
            <p>最高: {data.bars[data.bars.length - 1].high}</p>
            <p>最低: {data.bars[data.bars.length - 1].low}</p>
            <p>收盤: {data.bars[data.bars.length - 1].close}</p>
            <p>Volume: {data.bars[data.bars.length - 1].volume}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipCarryOver;
