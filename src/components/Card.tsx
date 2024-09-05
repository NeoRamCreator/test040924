import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Modal,
} from "@mui/material";
import { User } from "../types";

interface CardProps {
  user: User;
}

const CardElement: React.FC<CardProps> = ({ user }) => {
  return (
    <Card sx={{ width: "358px", height: "348px", flexGrow: 1 }}>
      <CardHeader
        ba
        avatar={<Avatar aria-label="user" src={user.picture.large}></Avatar>}
        sx={{ background: "#F3F4F6" }}
        title={
          <Typography variant="h6">
            {user.name.first} {user.name.last}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="textSecondary">
            jordanduck546
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
          {user.location.street.number} {user.location.street.name},{" "}
          {user.location.city}, {user.location.state}
          {user.location.postcode}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
          Телефон
        </Typography>
        <Typography variant="body2">+7 {user.phone}</Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
          E-mail
        </Typography>
        <Typography variant="body2">{user.email}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardElement;
