import React, { Component } from "react";
import { Table } from "react-bootstrap";

class MyTable extends Component {
  render() {
    return (
      <div class="my-3">
        <Table striped bordered hover responsive="sm">
          <thead>
            My Experience :
            <tr>
              <th>Topic</th>
              <th>Knowledge (in years)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-weight-bolder">HTML</td>
              <td>3</td>
            </tr>
            <tr>
              <td class="font-weight-bolder">CSS</td>
              <td>3</td>
            </tr>
            <tr>
              <td class="font-weight-bolder">JS</td>
              <td>2</td>
            </tr>
            <tr>
              <td class="font-weight-bolder">PHP</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MyTable;
