# TitanHelp Ticketing System

## Overview
TitanHelp is a full-stack web application designed to facilitate the reporting and managing of help desk tickets. Developed by Ali Ahmadiavin, this system integrates a React frontend with a Spring Boot backend, showcasing modern full-stack development techniques.

## Features
- **Create Tickets**: Users can submit new help desk tickets using a simple form.
- **View Tickets**: Users can view a list of all submitted tickets.
- **Responsive Design**: Ensures a consistent experience across various devices and screen sizes.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Spring Boot, Spring Data JPA
- **Database**: H2 Database (Development), Extendable to MySQL
- **Other Tools**: Maven, Git for version control

## Getting Started

### Prerequisites
- Java JDK 11 or later
- Node.js and npm
- Git

### Installation

#### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TitanHelp.git
   cd TitanHelp
2. Navigate to the backend directory and build the project using Maven:
   ```bash
   cd backend
   mvn clean install
3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
4. Frontend Setup
Navigate to the frontend directory from the project root:
   ```bash
   cd frontend
5. Install the necessary npm packages:
   ```bash
   npm install
6. Start the React application:
   ```bash
   npm start
This will serve the app at **http://localhost:3000**.

**Usage**
- To create a ticket: Navigate to http://localhost:3000, fill out the ticket form, and submit.

- To view tickets: Access the main page to see a list of all tickets.



_Created by Ali Ahmadiavin_
