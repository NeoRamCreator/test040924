import React, { useState } from "react";
import { Outlet } from "react-router";
import "../index.css";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { User } from "../types";
import CardUser from "../components/SelectUser";

const Main = () => {
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(searchParams.get("tab") || "table");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const handleViewChange = (newView: string) => {
    setView(newView);
    setSearchParams({ tab: newView, page: page.toString() });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ tab: view, page: newPage.toString() });
  };

  return (
    <div className="main">
      <CardUser />
      <div className="main__top">
        <h2>Список пользователей</h2>
        <div className="main__btn-s">
          <button
            onClick={() => handleViewChange("table")}
            className={`btn-s__btn ${view === "table" ? "active" : ""}`}
          >
            Таблица
          </button>
          <button
            onClick={() => handleViewChange("card")}
            className={`btn-s__btn ${view === "card" ? "active" : ""}`}
          >
            Карточка
          </button>
        </div>
      </div>
      <Outlet />

      <Pagination
        currentPage={page}
        totalItems={10000}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <div></div>
    </div>
  );
};

export default Main;
