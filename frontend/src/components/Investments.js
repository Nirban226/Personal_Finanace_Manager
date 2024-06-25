import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './styles/Investments.scss';

const Investments = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchInvestments = async () => {
      const response = await api.get('/investments');
      setInvestments(response.data);
    };

    fetchInvestments();
  }, []);

  return (
    <div className="investments">
      <h1>Investments</h1>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            {investment.name} - {investment.amount} - {investment.current_value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Investments;
