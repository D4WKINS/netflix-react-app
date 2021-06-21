import {Container,Col,Row} from 'react-bootstrap'
import { Component } from 'react'
class MovieDetails extends Component {
    // state = {  }
    render() { 
        return (
            <Container style={{minHeight:"100vh"}}>
                <Row>
                    <Col md={{span:6,offset:4}}>
                        <h2 className="text-light">Movie Details go here!</h2>
                    </Col>
                </Row>
            </Container>

          );
    }
}
 
export default MovieDetails;