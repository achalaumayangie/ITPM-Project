import React, { Component } from 'react'
import axios from 'axios';
import NavBarCus from './NavBarCus';

export default class paycus extends Component {
    constructor(props){
        super(props);
        this.state={
          Restposts:[]
        };
      }
    
    componentDidMount(){
      this.retrievePosts();
    }
      retrievePosts(){
        axios.get("http://localhost:8000/payments").then(res=>{
          if(res.data.success){
            this.setState({
              Restposts:res.data.existingPosts
            });
    
            console.log(this.state.Restposts)
          }
        });
      } 
    
      


      filterData(Restposts,searchKey){                      

        const result = Restposts.filter((Restposts) =>            
        Restposts.name.toLowerCase().includes(searchKey)||
        Restposts.address.toLowerCase().includes(searchKey)||
        Restposts.mobile.toLowerCase().includes(searchKey)||
        Restposts.date.toLowerCase().includes(searchKey)||
            
        Restposts.name.toUpperCase().includes(searchKey)||  
        Restposts.address.toUpperCase().includes(searchKey)|| 
        Restposts.mobile.toUpperCase().includes(searchKey)||
        Restposts.date.toUpperCase().includes(searchKey)||
        
        Restposts.name.toUpperCase().includes(searchKey)||  
        Restposts.address.includes(searchKey)|| 
        Restposts.mobile.includes(searchKey)||
        Restposts.date.includes(searchKey)
        
        
        )
    
        this.setState({Restposts:result})                   
      }
    
    
    
      handleSearchArea = (e) =>{
    
        const searchKey= e.currentTarget.value;
    
        axios.get("/payments").then(res =>{
          if(res.data.success){
            
            this.filterData(res.data.existingPosts,searchKey)
          }
        });
      }
    




    
      render() {
        
        return (
          
          <div className="container">
              <NavBarCus/>
              
              <div style={{backgroundColor:"beige"}}>

    
              <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            <h4>Payment Details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>
              </input>
          </div>
        </div>

          <table className = "table" >
            <thead>
              <tr>
                <th scope="col">ROOM NUMBER</th>
                <th scope="col">STANDARD ROOM TYPE</th>
                <th scope="col">FULL NAME</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">MOBILE NUMBER</th>
                <th scope="col">DATE BOOKED</th>
                
              </tr>
            </thead>
                    <tbody>
                      {this.state.Restposts.map((Restposts,index)=>(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
    
                        <td>
                            <a href={`/paypost/${Restposts._id}`} style={{textDecoration:'none'}}>
                            {Restposts.menue}
                            </a>
                            </td>


                        <td>{Restposts.name}</td>
                        <td>{Restposts.address}</td>
                        <td>{Restposts.mobile}</td>
                        <td>{Restposts.date}</td>
                       
                         
                        <td>
                         
                          
                          </td>
                        </tr>
                      ))}     
                    </tbody> 
                    </table>
    
                    <button className="brn btn-success"> <a href="/payadd" style={{textDecoration:'none',color:'white'}}> Make Payment </a></button>
                    
                    
                    <br>
                          
                          </br>
                          </div>
          </div>
        );
      }
    }
