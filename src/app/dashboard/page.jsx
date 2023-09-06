'use client'

import useSWR from "swr";
import styles from "./page.module.css";

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);

  return <div className={styles.container}>Dashboard</div>
}

export default Dashboard