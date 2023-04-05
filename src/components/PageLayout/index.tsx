import React from "react";
import DemosGrid from "../DemosGrid";

const PageLayout = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h1 className="pt-5 pb-10 text-5xl font-black">React Playground</h1>
        <DemosGrid />
      </div>
    </main>
  );
};

export default PageLayout;
