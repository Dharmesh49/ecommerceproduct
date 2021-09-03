/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../../HeaderComponent/Header';
import { withRouter } from 'react-router-dom';

function UpdateProduct(props) {
  console.warn('props', props.match.params.id);
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      'http://localhost:8000/api/product/' + props.match.params.id,
    );
    result = await result.json();
    setData(result);
  }, []);
  return (
    <div>
      <Header />
      <h1>Update Product Page</h1>
      <br />
      <input type="text" defaultValue={data.name} />
      <br /> <br />
      <input type="text" defaultValue={data.price} />
      <br /> <br />
      <input type="text" defaultValue={data.description} />
      <br />
      <br />
      <input type="file" defaultValue={data.file_path} />
      <br />
      <br />
      <img
        style={{ width: 50 }}
        src={'http://localhost:8000/' + data.file_path}
      />
      <br />
      <br />
      <button>Update</button>
    </div>
  );
}

export default withRouter(UpdateProduct);
