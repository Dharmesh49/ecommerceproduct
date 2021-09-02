/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Header from '../HeaderComponent/Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function deletebutton(id) {
    let result = await fetch('http://localhost:8000/api/delete/' + id, {
      method: 'DELETE',
    });
    result = await result.json();
    console.log(result);
    getData();
  }
  async function getData() {
    const formData = new FormData();
    let result = await fetch('http://localhost:8000/api/showList', {
      method: 'POST',
      body: formData,
    });
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1> Product List</h1>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
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
                <td>
                  <span
                    onClick={() => {
                      deletebutton(d.id);
                    }}
                    className="delete"
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link to={'update/' + d.id}>
                    <span className="update">Update</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
