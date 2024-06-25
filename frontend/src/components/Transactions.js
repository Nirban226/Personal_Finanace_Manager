import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/Transactions.scss';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await api.get('/transactions');
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions">
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.amount} - {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
