import React from "react";
import Card from "./Card";
const HomeBody = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 mt-9">
         <Card/> 
      </div>
    </section>
  );
};

export default HomeBody;
