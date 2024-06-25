import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './styles/Budget.scss';

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const response = await api.get('/budgets');
      setBudgets(response.data);
    };

    fetchBudgets();
  }, []);

  return (
    <div className="budgets">
      <h1>Budgets</h1>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.id}>
            {budget.amount} - {budget.start_date} to {budget.end_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Budgets;
