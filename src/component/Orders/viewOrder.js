import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrder';
import Header from '../../Header';

const placeOrder = "http://localhost:7600/orders";
class ViewOder extends Component {

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render() {
        return(
           <>
           <Header/>
            <Display orderData={this.state.orders}/>
           </>
        )
    }

    componentDidMount(){
        axios.get(placeOrder).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOder