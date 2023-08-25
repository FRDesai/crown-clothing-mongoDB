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
          "http://localhost:5050/api/categories" //https://crown-clothing-kypn.onrender.com/api/categories
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
