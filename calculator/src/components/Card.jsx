import Grid from "./Grid";
import Input from "./Input";

const Card = (props) => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header fw-bold bg-dark text-white">
          Simple Calculator
        </div>
        <div className="card-body bg-secondary">
          <Input value={props.value} />
          <Grid onClick={props.onClick} />
        </div>
        <div className="card-footer text-body-secondary bg-dark">
          <small className="text-white" style={{ fontSize: "0.5rem" }}>
            Designed by Aura Tech Hub
          </small>
        </div>
      </div>
    </>
  );
};

export default Card;
