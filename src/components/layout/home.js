import React, { useEffect, useState } from "react";
import styles from './home.module.css'
import Table from "../table/table";
import axios from "axios";
import Form from "../Form/Form";
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const data = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setApiData(response?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <div className={styles.container}>
    <Form setApiData={setApiData} apiData={apiData}/>
    <Table apiData={apiData} />
    </div>
  );
};

export default Home;
