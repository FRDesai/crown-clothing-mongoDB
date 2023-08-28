import { createContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://crown-clothing-kypn.onrender.com/api/categories" //"http://localhost:5050/api/categories"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const value = data;
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
