import React from "react";
import categories from "../../categories.json";
import "./Home.styles.scss";

const Home = () => {
  return (
    <>
      <div className="container">
        {categories.map((each) => (
          <div className="item">
            <img src={each.imageUrl} alt={each.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
