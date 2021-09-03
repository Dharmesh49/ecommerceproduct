/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Header from '../HeaderComponent/Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
const pageSize = 10;

function ProductList() {
  const [currentPage, setCurrent] = useState(1);
  const [paginatedPost, setpaginatedPosts] = useState([]);
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
    setpaginatedPosts(_(result.data).slice(0).take(pageSize).value());
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

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrent(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPost);
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <div></div>
        <h1> Product List</h1>
        <br />
        <div>
          <div class="banner-container">
            <div class="banner">
              <div class="shoe"></div>

              <div class="content">
                <span>upto</span>
                <h3>50% 0ff</h3>
                <p>offer ends after 5 days</p>
                <a href="#" class="btn">
                  veiw offer
                </a>
              </div>
              <div class="women"></div>
            </div>
          </div>
        </div>
        {!paginatedPost ? (
          'No data found'
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Operations</th>
                <th>Status</th>
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
        )}
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? 'page-item active' : 'page-item'
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductList;
