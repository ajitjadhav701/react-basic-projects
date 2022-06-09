import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
     <Router>
     <Navbar/>
        <Routes> { /*this Routes done with Router latest version 6 */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
     </Router>
    </div>
  )

}

export default App




//react router 5 version Routing
// <Router>
//      <Navbar/>
//       <Switch>
//         <Route exact path='/' ><Home/></Route>
//         <Route  path='/about' ><About/></Route>
//         <Route  path='/cocktail/:id' ><SingleCocktail/></Route>
//           <Route  path='*' ><Error/></Route>
//       </Switch>
//   </Router>