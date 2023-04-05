import DemoItem from "../DemoItem";

const DemosGrid = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:gap-10">
      <DemoItem />
      <DemoItem />
      <DemoItem />
    </div>
  );
};

export default DemosGrid;
