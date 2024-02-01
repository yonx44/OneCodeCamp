// import React, { useState } from 'react';
// import './App.css';

// import ContactForm from './ContactForm';
// import ContactList from './ContactList';

// function App() {
//     const [Counter, setCounter] = useState(0);

//     const handleClick = () => {
//     setCounter(Counter + 1);
//     };
  
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <button onClick={handleClick}>Click Me!</button>  
//                 <p>Total Clicks: {Counter}</p>
//             </header>
//         </div>
//     );
// }

// function App() {
//   const [contacts, setContacts] = useState([
//     {
//       name: 'Monkey D Luffy',
//       email: 'monkeydluffy@gmail.com',
//       picture: 'https://placekitten.com/80/80', 
//     },
//     {
//       name: 'Roronoa Zoro',
//       email: 'roronoazoro@yahoo.com',
//       picture: 'https://placekitten.com/81/80', 
//     },
//     {
//       name: 'Vinsmoke Sanji',
//       email: 'vinsmokesanji@microsoft.com',
//       picture: 'https://placekitten.com/82/80', 
//     },
//   ]);

//   const handleAddContact = (newContact) => {
//     setContacts([...contacts, newContact]);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Contact List App</h2>
//         <ContactForm onAddContact={handleAddContact} />
//         <ContactList contacts={contacts} />
//       </header>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Carousel, Pagination, Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';
import CarouselImage from './Components/CarouselImage';
import ContactUs from './Components/ContactUs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroSection: {
    backgroundColor: '#f8f9fa',
    padding: '50px',
    textAlign: 'center',
  },
  gridContainer: {
    marginTop: '20px',
  },
  toastContainer: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 1,
  },
};

const BasicExample = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BasicExample} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    );
  };
  
  
  const cardGrid = [];
  for (let i = 1; i <= 12; i++) {
    cardGrid.push(
      <Col key={i} xs={12} md={4} lg={3} style={{ marginBottom: '20px' }}>
        <Card>
          <Card.Img variant="top" src={`https://source.unsplash.com/200x200?image=${i}`} alt={`Card ${i}`} />
          <Card.Body>
            <Card.Title>House {i}</Card.Title>
            <Card.Text>
              House Villa.
            </Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const darkModeStyles = darkMode
    ? { backgroundColor: '#222', color: '#fff' }
    : { backgroundColor: '#fff', color: '#222' };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  const items = [];
  const active = 1;

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Pagination size="sm" className="pagination">
        {items}
      </Pagination>
    </div>
  );

  const toastContent = (
    <Toast onClose={handleCloseToast} show={showToast} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>Dark mode enabled</Toast.Body>

    </Toast>
  );

  return (
    <div style={{ ...styles.container, ...darkModeStyles }}>
      <Navbar expand="lg" bg="dark" variant="dark" fluid>
        <Container fluid>
          <Navbar.Brand href="#home">Homes Realty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Talk to an Agent</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Browse Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Schedule meeting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sell your house</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              variant="outline-light"
              style={styles.darkModeButton}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={styles.heroSection}>
        <h1>Welcome to Homes and Realty</h1>
        <p>We help you find your next investment or your next home</p>
      </div>

      <div style={{ width: '600px', height: '300px', margin: '20px' }}>
        <Carousel>
          <Carousel.Item>
            <CarouselImage
              src="https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg"
              alt="First slide"
              caption=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              src="https://c4.wallpaperflare.com/wallpaper/1005/371/721/architecture-building-design-house-wallpaper-preview.jpg"
              alt="Second slide"
              caption=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              src="https://c4.wallpaperflare.com/wallpaper/857/906/482/house-modern-luxury-architecture-wallpaper-preview.jpg"
              alt="Third slide"
              caption=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>

      {/* 9x9 Grid of Cards */}
      <Container style={styles.gridContainer}>
        <Row>{cardGrid}</Row>
      </Container>

      {/* Pagination */}
      {paginationBasic}

      {/* Contact Form */}
      <Container style={{ ...styles.gridContainer, ...darkModeStyles }}>
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your Message" />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Toast */}
      <div style={styles.toastContainer}>
        {toastContent}
      </div>


    </div>
  );
};

export default BasicExample;