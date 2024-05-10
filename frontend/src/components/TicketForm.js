import React, { useState } from 'react';
import axios from 'axios';

function TicketForm() {
  const [ticket, setTicket] = useState({
    name: '',
    date: '',
    problemDescription: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicket(prevTicket => ({ ...prevTicket, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/tickets', ticket);
      alert('Ticket created successfully!');
      setTicket({ name: '', date: '', problemDescription: '' });
    } catch (error) {
      alert('Failed to create ticket: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={ticket.name} onChange={handleChange} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" name="date" value={ticket.date} onChange={handleChange} />
      </div>
      <div>
        <label>Problem Description:</label>
        <textarea name="problemDescription" value={ticket.problemDescription} onChange={handleChange} />
      </div>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}

export default TicketForm;
