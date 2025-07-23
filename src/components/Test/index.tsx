import {
    useGetLatestTradeDatesQuery,
    useGetChipUnifyTableQuery,
} from "@/states/marketInsight/marketInsightApiSlice";
import { useSelector } from 'react-redux';
import { createSlicedTradeDatesSelector } from "@/states/marketInsight/marketInsightSelectors";

const Test = () => {
    // Get the latest trade dates
    const { data: latestTradeDates, isLoading: isTradeDatesLoading, error: tradeDatesError } = useGetLatestTradeDatesQuery({ size: 30 });
    
    // Get the first six items using selector
    const firstSix = useSelector(createSlicedTradeDatesSelector(0, 6));

    // Calculate from and to timestamps from firstSix
    const toTimestamp = firstSix?.[0]?.unixTimestampSeconds;
    const fromTimestamp = firstSix?.[5]?.unixTimestampSeconds;

    // Use skip flag to only fire when we have both timestamps
    const { data: chipData, isLoading: isChipLoading, error: chipError } = useGetChipUnifyTableQuery(
        // { from: fromTimestamp!, to: toTimestamp! },
        undefined,
        { 
            skip: !fromTimestamp || !toTimestamp || isTradeDatesLoading 
        }
    );

    console.log('Latest trade dates:', latestTradeDates);
    console.log('First six:', firstSix);
    console.log('From timestamp:', fromTimestamp);
    console.log('To timestamp:', toTimestamp);
    console.log('Chip data:', chipData);
    console.log('Chip loading:', isChipLoading);
    console.log('Chip error:', chipError);

    if (isTradeDatesLoading) return <div>Loading trade dates...</div>;
    if (tradeDatesError) return <div>Error loading trade dates: {JSON.stringify(tradeDatesError)}</div>;

    console.log('Chip data:', chipData);

    return (
        <div>
            <h2>Market Insight API Demo</h2>
            
            <div>
                <h3>Trade Dates (Original Data):</h3>
                <p>Total count: {latestTradeDates?.length || 0}</p>
                <ul>
                    {latestTradeDates?.map((date, index) => (
                        <li key={date.dateString}>
                            Index {index}: {date.dateString} (Unix: {date.unixTimestampSeconds})
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>First Six (0-6):</h3>
                <p>Count: {firstSix.length}</p>
                <ul>
                    {firstSix.map((date, index) => (
                        <li key={date.dateString}>
                            First Six Index {index}: {date.dateString} (Unix: {date.unixTimestampSeconds})
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Chip Unify Table Query:</h3>
                <p>From timestamp: {fromTimestamp || 'Not available'}</p>
                <p>To timestamp: {toTimestamp || 'Not available'}</p>
                <p>Query skipped: {(!fromTimestamp || !toTimestamp || isTradeDatesLoading) ? 'Yes' : 'No'}</p>
                
                {isChipLoading && <p>Chip data loading...</p>}
                {chipError && <p>Chip error: {JSON.stringify(chipError)}</p>}
            </div>
        </div>
    );
};

export default Test;
