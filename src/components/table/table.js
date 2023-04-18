import React , { useState } from "react";
import styles from "./table.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { table_Header } from "../../string/string";
const Table = ({apiData}) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(apiData);
  return (
    <div className={styles.containment}>
    <SearchBox 
     apiData={apiData} 
     setFilteredData={setFilteredData} 
     setSearch={setSearch}
     search={search} />
    <table className={styles.container}>
    <thead>
      <tr>
        {table_Header.map((header)=><th className={styles.wrapper}  key={header?.id}>{header.name}</th>)}
      </tr>
      </thead>
      <tbody>
      {(search.length>3?filteredData:apiData)?.map((data,index) => {
        return (
          <tr key={index}>
            <td className={styles.id}>{index}</td>
            <td className={styles.wrapper}>{data.name}</td>
            <td className={styles.wrapper}>{data.phone}</td>
            <td className={styles.wrapper}>{data.email}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
