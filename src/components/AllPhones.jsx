import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function AllPhones() {
  const [phones, setPhones] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${API_URL}/phones`);

        setPhones(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(phones);
  return (
    <div>
      allPhones
      <div>
        {phones.map((element) => {
          <div key={element.id}>
            <h3>{element.name}</h3>
          </div>;
        })}
      </div>
    </div>
  );
}

export default AllPhones;
