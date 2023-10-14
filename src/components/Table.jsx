
import React from 'react';

const data = [
  {
    productName: 'Product A',
    image: 'profile.jpg',
    stockQuantity: 100,
    price: '$20.99',
    totalSales: 500,
  },
  {
    productName: 'Product B',
    image: 'profile.jpg',
    stockQuantity: 120,
    price: '$21.99',
    totalSales: 500,
  },
   {
     productName: 'Product C',
     image: 'profile.jpg',
     stockQuantity: 80,
     price: '$22.99',
     totalSales: 500,
   },
  {
    productName: 'Product D',
    image: 'profile.jpg',
    stockQuantity: 110,
    price: '$23.99',
    totalSales: 500,
  },
];

const Table = () => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Stock Quantity</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="product-cell">
              <img className="imageproduct" src={row.image} alt={row.productName} />
              <div>
              <p style={{fontWeight:"bold",fontSize:"14px"}}>{row.productName}</p>
              <span style={{fontSize:"11px",color:"grey"}}>lorem ipsum dollar</span>
                </div>
            </td>
            <td style={{fontSize:"12px"}}>{row.stockQuantity} in stock</td>
            <td style={{fontSize:"12px",fontWeight:"bold"}}>{row.price}</td>
            <td style={{fontSize:"12px"}}>{row.totalSales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
