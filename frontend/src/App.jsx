import NavBar from "./NavBar.jsx"
import SignUp from "./SignUp.jsx"
import SignIn from "./SignIn.jsx"
import ProductCard from "./ProductCard.jsx"
import Home from "./Home.jsx"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    
     <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/> 
     <Route path="/signin" element={<SignIn/>}/>
     </Routes>
   
    
  )
}

export default App
