import {Container,Col,Row} from 'react-bootstrap'
import { Component } from 'react'
class MovieDetails extends Component {
    // state = {  }
    render() { 
        return (
            <Container>
                <Row>
                    <Col md={{span:6,offset:6}}>
                        <h2>Movie Details go here!</h2>
                    </Col>
                </Row>
            </Container>

          );
    }
}
 
export default MovieDetails;