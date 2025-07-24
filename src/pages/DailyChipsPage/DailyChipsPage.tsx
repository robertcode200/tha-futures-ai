import ChipOverview from "./tabContents/chipOverview/ChipOverview";
import ChipCarryOver from "./tabContents/chipCarryOver/ChipCarryOver";
import NavGroup from "./NavGroup";

const DailyChipsPage = () => {
  return (
    <div>
      <h1>Daily Chips Page</h1>
      <p>This is the daily chips page component.</p>
      <ChipOverview />
      <ChipCarryOver />
      <NavGroup />
    </div>
  );
};

export default DailyChipsPage;
