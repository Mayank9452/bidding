import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaChartLine } from 'react-icons/fa';
import type { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <BSNavbar bg="primary" variant="dark" expand="lg" fixed="top" className="shadow">
      <Container>
        <BSNavbar.Brand 
          onClick={() => setCurrentPage('home')} 
          style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          <FaChartLine className="me-2" />
          BidMaster
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              active={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
              className="fw-semibold"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              active={currentPage === 'bids'}
              onClick={() => setCurrentPage('bids')}
              className="fw-semibold"
            >
              My Bids
            </Nav.Link>
            <Nav.Link 
              active={currentPage === 'leaderboard'}
              onClick={() => setCurrentPage('leaderboard')}
              className="fw-semibold"
            >
              Leaderboard
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
