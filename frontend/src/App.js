




import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import HomeC from './components/HomeC';
import HomeCusBefore from './components/HomeCustBefore';








//reservation
import CreateRes from './components/CreateRes';
import EditRes from './components/EditRes';
import ResDetails from './components/ResDetails';
import ViewRes from './components/ViewRes';
import HomeRes from './components/HomeRes';
import Cards from './components/ThisaraClient/Cards.jsx';


//customer
import allCustomer from './components/allCustomer';
import createCustomer from './components/createCustomer';
import editCustomer from './components/editCustomer';
import viewCustomer from './components/viewCustomer';
import generateReport from './components/generateReport';
import customerDetails from './components/customerDetails';
import login from './components/login';
import createRequest from './components/createRequest';
import readRequest from './components/readRequest';




//feedback
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import FeedbackHome from './components/Home'
import PostDetails from './components/PostDetails'


//Payment
import homepay from './components/homepay';
import payadd from './components/payadd';
import payedit from './components/payedit';
import paypost from './components/paypost';
import paycus from './components/paycus';
import payallinfor from './components/payallinfor';
import payeditRe from './components/payeditRe';
import payForm from './components/payForm';




 export default class App extends Component{
  render() {
    return (
      
     
         <BrowserRouter>
         <div className="jumbotron">
           
           
 
           {/* <NavBar/> */}

           <Route path="/AdminHome" exact component={HomeA}></Route>
           {/* Customer Home */}
           <Route path="/Home" exact component={HomeC}></Route>
           <Route path="/" exact component={HomeCusBefore}></Route>

        

          {/* Reservation */}
          <Route path="/addRes" exact component={CreateRes}></Route>
          <Route path="/editRes/:id" exact component={EditRes}></Route>
          <Route path="/Reserpost/:id" exact component={ResDetails}></Route>        
          <Route path="/vposts" exact component={ViewRes}></Route>
          <Route path="/hres" exact component={HomeRes}></Route>
          <Route path="/reservationClient" exact component={Cards}></Route>

          
          
           {/*Customer*/}
           <Route path= "/allCustomer" exact component={allCustomer}></Route>
           <Route path= "/register" component={createCustomer}></Route>
           <Route path= "/edit/:id" component={editCustomer}></Route>
           <Route path= "/customer/:id" component={viewCustomer}></Route>
           <Route path= "/report" component={generateReport}></Route>
           <Route path= "/customerDetails" component={customerDetails}></Route>
           <Route path= "/CustomerLogin" exact component={login}></Route>
           <Route path= "/createRequest" component={createRequest}></Route>
           <Route path= "/readRequest" component={readRequest}></Route>
        
      
            
           
           
           {/*feedback*/}
           <Route path="/FeedbackHome" exact component={FeedbackHome}/>
          <Route path="/addf" component={CreatePost}/>
          <Route path="/editf/:id" component={EditPost}/>
          <Route path="/post/:id" component={PostDetails}/>


        {/*Payment*/}
<Route path="/homepay" exact component={homepay}></Route>
        <Route path="/payadd" exact component={payadd}></Route>
        <Route path="/payedit/:id" exact component={payedit}></Route>
        <Route path="/paypost/:id" exact component={paypost}></Route>
        <Route path="/payallinfor" exact component={payallinfor}></Route>
        <Route path="/payeditRe" exact component={payeditRe}></Route>
        <Route path="/payForm" exact component={payForm}></Route>
        <Route path="/paycus" exact component={paycus}></Route>
            


          


           </div>
         </BrowserRouter>
    
    )
  }
}