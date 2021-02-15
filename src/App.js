import Home from './Home' //imported home function from home.js
import './App.css';// css applied to main app
import Header from './Header'
 import Footer from './Footer'
 import SearchPage from './SearchPage'
// React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
    {/* we have to wrap all the components of our app inside  */}
    <Router>
    {/* we will always header and footer on every page */}
    <Header/>

{/* since we have to change search page or home depending on the route we are in, so we have 
placed them inside the Switch Tab */}
<Switch>

<Route path="/search">
<SearchPage />
</Route>


<Route path="/">
<Home />
</Route>


</Switch>
    
    
    <Footer />
    
   
     
    </Router>
    
    </div>
  );
}

export default App;
