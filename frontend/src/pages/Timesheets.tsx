import React from "react";
import { Card, Table } from "react-bootstrap";

const title = "Timesheets";
type Props = {};

const Timesheets = (props: Props) => {
  return (
    <Card>
      <Card.Body>
        <h2 className="mb-4">{title}</h2>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Week</th>
              <th>Year</th>
              <th>Total hour(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Boom Transport</td>
              <td>24</td>
              <td>2024</td>
              <td>16</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Boom Transport</td>
              <td>23</td>
              <td>2024</td>
              <td>1.75</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Other</td>
              <td>18</td>
              <td>2024</td>
              <td>40</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Timesheets;
