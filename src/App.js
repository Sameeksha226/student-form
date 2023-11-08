import './App.css';
import StudentForm from './components/student-form/StudentForm';


{/*function NavBar(){
  return(
    <h1>This is a navbar component</h1>
  );
}

function Banner(){
  return (
  <h1>This is banner component</h1>
  );
}

function About(){
  return(
    <h1>ABOUT</h1>
  );
}

function Footer(){
  return (
<h1>This is footer</h1>
  );
}

function GreetUser(props){
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Phone Number: {props.num}</h1>
      <h1>Semester: {props.sem}</h1>
      <h1>Branch: {props.branch}</h1>
    </div>
  );
}*/}

function App() {
  return (
    <div className="App">
     {/*<NavBar />
     <Banner />
     <About />
     <Footer /><Banner/>
  <GreetUser  name="Sam" email="sameekshasnayak@gmail.com" num="9980078320" sem="5" branch="AI & ML"/>*/}
     { /*<header className="App-header">
      <img src={logo} className="App-logo"  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
  </header>*/}
  <StudentForm/>
    </div>
  );
}

export default App;
