import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class MyTable extends Component {
  render() {
    return (
      <Table class="table bg-dark w-100">
        <thead>
          Lang Framework/Lib used :
          <tr>
            <th>Name</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>25/100%</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>25/100%</td>
          </tr>
          <tr>
            <td>JS</td>
            <td>25/100%</td>
          </tr>
          <tr>
            <td>PHP</td>
            <td>25/100%</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default MyTable