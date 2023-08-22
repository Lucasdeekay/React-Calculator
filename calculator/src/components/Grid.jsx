import { useState } from "react";
import Button from "./Button";

const Grid = (props) => {
  const [newClass, setNewClass] = useState("disabled");


  return (
    <>
      <div className="container text-center border border-success p-2 border-opacity-10 rounded mt-3 mb-0">
        <div className="row row-cols-4">
          <div className="col">
            <Button
              onClick={() => {
                if (newClass === "disabled"){
                   setNewClass("")
                 } else {
                   setNewClass("disabled");
                   props.onClick("C");
                 }
              }}
              type="button"
              color="warning"
              size="md"
              width="100"
            >
              <i className="bi bi-power"></i>
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("C")}
              type="button"
              color="warning"
              size="md"
              width="100"
              cls={newClass}
            >
              <i className="bi bi-c-circle-fill"></i>
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("DEL")}
              type="button"
              color="danger"
              size="md"
              width="100"
              cls={newClass}
            >
              <i className="bi bi-backspace"></i>
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("*")}
              type="button"
              color="primary"
              size="md"
              width="100"
              cls={newClass}
            >
              *
            </Button>
          </div>
        </div>
        <div className="row row-cols-4 mt-2">
          <div className="col">
            <Button
              onClick={() => props.onClick("7")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              7
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("8")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              8
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("9")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              9
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("/")}
              type="button"
              color="primary"
              size="md"
              width="100"
              cls={newClass}
            >
              /
            </Button>
          </div>
        </div>
        <div className="row row-cols-4 mt-2">
          <div className="col">
            <Button
              onClick={() => props.onClick("4")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              4
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("5")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              5
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("6")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              6
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("-")}
              type="button"
              color="primary"
              size="md"
              width="100"
              cls={newClass}
            >
              -
            </Button>
          </div>
        </div>
        <div className="row row-cols-4 mt-2">
          <div className="col">
            <Button
              onClick={() => props.onClick("1")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              1
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("2")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              2
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("3")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              3
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("+")}
              type="button"
              color="primary"
              size="md"
              width="100"
              cls={newClass}
            >
              +
            </Button>
          </div>
        </div>
        <div className="row row-cols-4 mt-2">
          <div className="col">
            <Button
              onClick={() => props.onClick(".")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              .
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("0")}
              type="button"
              color="dark"
              size="md"
              width="100"
              cls={newClass}
            >
              0
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("ANS")}
              type="button"
              color="success"
              size="md"
              width="100"
              cls={newClass}
            >
              <small style={{ fontSize: "8.5px" }}>ANS</small>
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => props.onClick("=")}
              type="button"
              color="success"
              size="md"
              width="100"
              cls={newClass}
            >
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
