import React, { useEffect, useState } from "react";
import TableView from "../components/TableView";
import { useSearchParams } from "react-router-dom";
import { RandomUserResponse, User } from "../types";
import CardView from "./CardView";

const GetData = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || "1";
  const tab = searchParams.get("tab") || "table";

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?results=20`)
      .then((response) => response.json())
      .then((data: RandomUserResponse) => {
        setData(data.results);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <>
      {tab === "table" ? <TableView data={data} /> : <CardView data={data} />}
    </>
  );
};
export default GetData;
