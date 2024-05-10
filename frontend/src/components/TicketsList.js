import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      {tickets.map(ticket => (
        <div key={ticket.id}>
          <h3>{ticket.name}</h3>
          <p>Date: {ticket.date}</p>
          <p>Description: {ticket.problemDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default TicketsList;
