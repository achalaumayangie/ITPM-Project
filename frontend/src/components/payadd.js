import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import res1 from '../images/res1.png'
import NavBarCus from './NavBarCus';


export default class payadd
 extends Component {
  
    constructor(props){
        super(props);
        this.state={
            
            menue:"",
            name:"",
            address:"",
            mobile:"",
            date:"",
           
            cardname:"",
            cno:null,
            expdate:"",
            cvv:"",
        
        }
    }
  
handleInputChange =(e)=>{

    const{name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value 
    })
}


 
    onSubmit = (e)=>{

        e.preventDefault();

        const{menue,name,address,mobile,date,cardname,cno,expdate,cvv} = this.state;

        const data ={
            menue:menue,
            name:name,
            address:address,
            mobile:mobile,
            date:date,
            
            cardname:cardname,
            cno:cno,
            expdate:expdate,
            cvv:cvv

        }

            console.log(data)

            axios.post("http://localhost:8000/payment/save",data).then((res)=>{
                if(res.data.success){
                    alert("Successful");
                    this.setState(
                        {
                            menue:"",
                            name:"",
                            address:"",
                            mobile:"",
                            date:"",
                            
                            cardname:"",
                            cno:"",
                            expdate:"",
                            cvv:"",
                        }
                    )
                }
            })
    }
   
    render() {
        
        return (

       
            <html>
                 <body>
                 <div className = "container" >
                    <NavBarCus/> </div>
        <section style={{backgroundImage:`url(${res1})`,
        backgroundSize:'cover',
        backgroundPosition:'auto',
     
        }}> 
            <div className="col-md-8 mt-4 mx-auto"style={{
        backgroundImage:`url(${res1})`,
        backgroundPosition:'auto',
        
        backgroundSize:'cover' 
      }}>

            <div className="h1"> <h1 className="h3 mb-3 font-weight-normal">Enter Details</h1> </div>
            
            <form className="row" onSubmit={this.onSubmit}>

          <div className="city" id="left" >
            

            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>
            Select Standard Room Type</label>
            <select name="menue" value={this.state.menue} onChange={this.handleInputChange} className="form-select">
                                        <option value="11menue">SELECT</option>
                                        <option value="Single - 7000 LKR">Single - 7000 LKR</option>
                                        <option value="Double - 15000 LKR">Double - 15000 LKR</option>
                                        <option value="Triple - 20000 LKR">Triple - 20000 LKR</option>
                                        <option value="Quad - 26000 LKR">Quad - 26000 LKR</option> 
                                        <option value="Queen - 35000 LKR">Queen - 35000 LKR</option>
                                        <option value="King - 41000 LKR">King - 41000 LKR</option>                     
            </select>
            </div>
            
            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}} >Full Name
</label>
            
            <input type="text"
            className="form-control"
            name="name"
            placeholder="Enter your full name"
            pattern="[a-z A-Z .]+"
            value={this.state.name} onChange={this.handleInputChange}required/>
            </div>
            
           

            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Address</label>
            <input type="text"
            className="form-control" placeholder="Enter your Address"
            name="address"

            value={this.state.address} 
            onChange ={this.handleInputChange}required/>
            </div>
            
            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Mobile number</label>
            <input type="text"  
            className="form-control" placeholder="Mobile"
            name="mobile"
            pattern="[0-9]{10}"
            value={this.state.mobile} 
            onChange ={this.handleInputChange}required/>
            </div>


            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Date Booked</label>
            <input type="date"
            className="form-control" placeholder="date"
            name="date"
            min="2022-04-17"
            value={this.state.date} 
            onChange ={this.handleInputChange}required/>
            </div>

           
             .<br />
    
            </div >
           
            <div className="city" id="right">
            <div className="h1"><h1 >Payments</h1></div>
            <br></br>
            <h1  className="form-group1">Accepted Cards</h1>
            <br></br>
            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Name on the card</label>
            <input type="text"
            className="form-control" placeholder="Name"
            name="cardname"
            value={this.state.cardname} 
            pattern="[a-z A-Z .]+"
            onChange ={this.handleInputChange}required/>
            </div>

            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Card number</label>
            <input type="text"
            className="form-control" placeholder="eg: 1234 5678 7896 7458"
            name="cno"
            pattern="[0-9]{16}"
            value={this.state.cno} 
            onChange ={this.handleInputChange}required/>
            </div>

            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Expiry date</label>
            <input type="date"
            className="form-control" placeholder="expdate"
            name="expdate"
            value={this.state.expdate} 
            onChange ={this.handleInputChange}required/>
            </div>

            <div className="form-group1" style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>CVV</label>
            <input type="text"
            className="form-control" placeholder="3-digit number"
            name="cvv"
            pattern="[0-9]{3}"
            value={this.state.cvv} 
            onChange ={this.handleInputChange}required />
            </div>
            <button className="btn btn-success" id="btn1" type="submit" style={{marginTop: '40px'}} required>

         

             <i className="far fa-check-square"></i>

            &nbsp; Book Now!

                </button>

              

                </div>
         

                </form>

                </div>
                <br/>
      </section>
      </body>
      </html>
             
    )
                    }
                }

