import React from "react";

import Table from "react-bootstrap/Table";

const myStyles = {
  key: {
    // width: "15%",
    marginLeft: "40px",
    marginRight: "40px",
    // marginTop: "50px",
    fontSize: "1.2rem",
    fontWeight: "300",
    textAlign: "center"
  }
};

class FloorPlan_desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let hidden = false;
    if (this.props.roleView === "host") {
      hidden = true;
    }
    return (
      <Table className={`${hidden ? "d-none" : ""}`}>
        <thead
          style={{
            backgroundColor: "lightgrey",
            fontWeight: "bold"
          }}
        >
          <tr>
            <th>Table Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#00A82E" }}>
            <td>Table Available</td>
          </tr>
          <tr style={{ backgroundColor: "yellow" }}>
            <td>Table Seated</td>
          </tr>
          <tr style={{ backgroundColor: "orange" }}>
            <td>Has Ordered</td>
          </tr>
          <tr style={{ backgroundColor: "#cc00cc" }}>
            <td>Food is Served</td>
          </tr>
          <tr style={{ backgroundColor: "#00C5CD" }}>
            <td>Needs Check</td>
          </tr>
          <tr style={{ backgroundColor: "red" }}>
            <td>Needs Bussing</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default FloorPlan_desc;
