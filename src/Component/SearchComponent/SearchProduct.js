/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Header from '../HeaderComponent/Header';
import { Table } from 'react-bootstrap';

function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    let result = await fetch('http://localhost:8000/api/search/' + key);
    result = await result.json();
    console.warn(result);
    setData(result);
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => search(e.target.value)}
          placeholder="Search...!!!"
        />
        {
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr key={index}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>
                    <img
                      style={{ width: 120 }}
                      src={'http://localhost:8000/' + d.file_path}
                    />
                  </td>
                  <th>{d.description}</th>
                  <th>{d.price}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      </div>
    </div>
  );
}

export default SearchProduct;
