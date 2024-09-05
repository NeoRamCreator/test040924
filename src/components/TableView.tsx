import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { User } from "../types";
import CardUser from "./SelectUser";
import { Button, Modal } from "@mui/material";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../store/selectUserSlice";

interface ViewProps {
  data: User[];
}

const TableView: React.FC<ViewProps> = ({ data }) => {

  const dispatch = useDispatch();

  const hanleSlectUser = (user: User) => {
    dispatch(setIndex(user));
  };

  return (
    <div className="table-element">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer className="table-element__table">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>ФИО</TableCell>
                <TableCell>Логин</TableCell>
                <TableCell>Адрес</TableCell>
                <TableCell>Телефон</TableCell>
                <TableCell>E-mail</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((user, index) => (
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell onClick={() => hanleSlectUser(user)}>
                    {index + 1}.{`${user.name.first} ${user.name.last}`}
                  </TableCell>
                  <TableCell>{user.login.username}</TableCell>
                  <TableCell>
                    {user.location.street.number} {user.location.street.name},{" "}
                    {user.location.city}, {user.location.state}
                    {user.location.postcode}
                  </TableCell>
                  <TableCell>+7 {user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TableView;
