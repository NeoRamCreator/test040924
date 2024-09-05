import {
  Avatar,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import { resetIndex } from "../store/selectUserSlice";
const SelectUser = () => {
  const selectedUser = useSelector(
    (state: RootState) => state.selectedIndex.user
  );

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(resetIndex());
  };
  return (
    <>
      {selectedUser && (
        <div className="card-user">
          <div className="card-user__header">
            <h3>Карточка пользователя</h3>
            <div className="close" onClick={handleClose}></div>
          </div>

          <CardHeader
            ba
            avatar={
              <Avatar
                aria-label="user"
                src={selectedUser?.picture.large}
              ></Avatar>
            }
            sx={{ background: "#F3F4F6" }}
            title={
              <Typography variant="h6">
                {selectedUser?.name.first} {selectedUser?.name.last}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Адрес
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
              }}
            >
              {selectedUser?.location.street.number}{" "}
              {selectedUser?.location.street.name},{" "}
              {selectedUser?.location.city}, {selectedUser?.location.state}
              {selectedUser?.location.postcode}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ mt: 2 }}
            >
              Телефон
            </Typography>
            <Typography variant="body2">+7 {selectedUser?.phone}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ mt: 2 }}
            >
              E-mail
            </Typography>
            <Typography variant="body2">{selectedUser?.email} </Typography>
          </CardContent>
        </div>
      )}
    </>
  );
};

export default SelectUser;
