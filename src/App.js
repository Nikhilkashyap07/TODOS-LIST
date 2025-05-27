import './App.css';
import Header from './MyComponents/Header'
import {Todos}  from './MyComponents/Todos'
import {Footer}  from './MyComponents/Footer'

function App() {

  // let todos = [
  //   {
  //     sno:1,
  //     title: "Go to market",
  //     desc:"buy a fruit"
  //   },
  //   {
  //     sno:2,
  //     title: "Go to school",
  //     desc:"attend classes"
  //   },
  //   {
  //     sno:3,
  //     title: "Go to shop",
  //     desc:"buy a soap"
  //   },
  // ]

  return (
    <>
    <Header title = "My Todos List" searchBar = {true}/>
    <Todos /*todos = {todos}*//>
    <Footer/>
    </>
  );
}

export default App;
