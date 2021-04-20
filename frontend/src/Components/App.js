import '../App.css';
//import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './Welcome'
import NavBar from './NavBar'
import Footer from './Footer'
// import Destination from './Destination'
import Destinations from './Destinations'
import Form from './Form'



function App() {

  return (
    <div className='app'>
      <Router>
       <NavBar/>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/new" component={Form}/>
        <Route exact path="/destinations" component={Destinations} />
       <Footer/>
      </Router>
    </div>
  )
}

export default App;
