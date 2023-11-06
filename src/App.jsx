import React from "react";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

// console.log(Sdata[0].sname);

// if/else
// const favSeries = "amazon";
// const FavS = () => {  
//   // if (favSeries === "netflix") {
//   //   return <Netflix />;
//   // } else {
//   //   return <Amazon />;
//   // }

//   return (favSeries === "amazon"? <Amazon/> :<Netflix />)
// };

// const App = () => (
//   <>
//     <h1 className="heading_style">List of top 5 Netflix Series in 2023</h1>
//     <FavS />
//   </>
// );
// end for if else

// this is for all
const App = () => (
  <>
    <h1 className="heading_style">List of Top Netflix Series in 2023</h1>
    {/* how to use map method  */}
    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
);

export default App;
