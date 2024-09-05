import { User } from "../types";
import CardElement from "./Card";

interface ViewProps {
  data: User[];
}

const CardView: React.FC<ViewProps> = ({ data }) => {
  return (
    <>
      <div className="card-element"
        style={{ 
          display: "flex",
          flexWrap: "wrap",
          columnGap: "16px",
          rowGap: "16px",
        }}
      >
        {data.map((user) => (
          <CardElement key={user.email} user={user} />

        ))}
      </div>
    </>
  );
};

export default CardView;
