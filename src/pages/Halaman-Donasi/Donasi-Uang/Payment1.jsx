import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const dataLocalStorage = localStorage.getItem("data");
  const userData = JSON.parse(dataLocalStorage);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_LINK_API}/donasi/detail-uang/${userData._id}`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transaction-list">
      <h2>Detail Transaksi</h2>
      <ListGroup>
        {transactions.map((transaction) => (
          <ListGroup.Item key={transaction._id}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Order ID: {transaction.orderId}</Card.Title>
                <Card.Text>
                  <strong>Tanggal:</strong> {transaction.tanggal}<br />
                  <strong>Nominal:</strong> {transaction.nominal}<br />
                  <strong>Status Transaksi:</strong> {transaction.status}
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TransactionList;