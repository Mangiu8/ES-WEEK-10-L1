import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: null,
  };
  selectedBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };
  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col xs={8}>
              {/* <AllTheBooks /> */}
              <BookList books={fantasy} onSelectBook={this.selectedBook} selectedAsin={this.state.selectedAsin} />
            </Col>
            <Col xs={4}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}
export default App;
