import React from "react";
import categories from "../../categories.json";
import "./Home.styles.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (each) => {
    const category = each.title;
    const capitalizedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    const dynamicRoute = `shop/${capitalizedCategory}`;

    navigate(dynamicRoute);
  };
  return (
    <>
      <div className="container">
        {categories.map((each) => (
          <div onClick={() => handleNavigation(each)} className="item">
            <div className="item-name-container">
              {each.title.toLocaleUpperCase()}
              <br />
              {/* SHOP NOW */}
            </div>
            <img src={each.imageUrl} alt={each.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
