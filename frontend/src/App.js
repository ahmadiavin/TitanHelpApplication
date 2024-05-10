import './App.css';
import React from 'react';
import TicketForm from './components/TicketForm';
import TicketsList from './components/TicketsList';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <TicketForm />
      </div>
      <div className="tickets-container">
        <TicketsList />
      </div>
    </div>
  );
}

export default App;
