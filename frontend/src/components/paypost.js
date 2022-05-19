import React, { Component } from 'react';
import axios from 'axios';
import NavBarCus from './NavBarCus';

export default class paypost extends Component {
    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/payment/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
            }
                console.log(this.state.post);


        });
    }
    
    render() {

        const{menue,name,address,mobile,date,cardname,cno,expdate,cvv} = this.state.post;
        return (
            <div className = "container" >
            <NavBarCus/>
            <div >

            <div style={{marginTop:'20px'}}>
                <h4>Payment Details</h4>
                <hr/>
                
                <d1 className ="row">
              
                    <dt className="col-sm-3">STANDARD ROOM TYPE</dt>
                    <dd className="col-sm-3">{menue}</dd>

                    <dt className="col-sm-3">FULL NAME</dt>
                    <dd className="col-sm-3">{name}</dd>
                    
                    <dt className="col-sm-3">ADDRESS</dt>
                    <dd className="col-sm-3">{address}</dd>

                    <dt className="col-sm-3">MOBILE NUMBER</dt>
                    <dd className="col-sm-3">{mobile}</dd>

                    <dt className="col-sm-3">DATE BOOKED</dt>
                    <dd className="col-sm-3">{date}</dd>

                  
                     
                </d1>
                <button className="brn btn-success"> <a href="/payForm" style={{textDecoration:'none',color:'white'}}> Create a Request to Update the Details or to Cancel the Booking</a></button>
            



            </div>
            
            </div>
             </div>
             
        );
    }
}

 