import {Component} from 'react'
class Heading extends Component {
    render() { 
        return ( 
            <h2 className="mb-3" style={{color:"white", fontSize:"1.8rem"}}>{this.props.text}</h2>
         );
    }
}
 
export default Heading