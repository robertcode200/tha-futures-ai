import { useSelector } from 'react-redux';
import {
    useGetLatestTradeDatesQuery,
} from "@/states/marketInsight/marketInsightApiSlice";
import { createSlicedTradeDatesSelector } from "@/states/marketInsight/marketInsightSelectors";

const TestComponent = () => {

    const { data: latestTradeDates, isLoading, error } = useGetLatestTradeDatesQuery({ size: 30 });
    console.log(latestTradeDates, isLoading, error);
    
    const firstSix = useSelector(createSlicedTradeDatesSelector(0, 6));

    console.log('Original data:', latestTradeDates);
    console.log('First six (0-6):', firstSix);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error)}</div>;

    return (
        <div>
            <h3>Original Data (all items):</h3>
            <p>Total count: {latestTradeDates?.length || 0}</p>
            <ul>
                {latestTradeDates?.map((date, index) => (
                    <li key={date.dateString}>
                        Index {index}: {date.dateString} (Unix: {date.unixTimestampSeconds})
                    </li>
                ))}
            </ul>
            <br/>
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
    );
};

export default TestComponent;
