import logo from './logo.svg';
import './App.css';
import Bloglist from './Bloglist';

function App() {
  return (
    <div className="App">
     <nav>
       <h2 className="mt-20 text-3xl font-semibold font-['Gilroy']">Whitney's Space</h2>
     </nav>
     <section>
       <Bloglist />
     </section>
      
    </div>
  );
}

export default App;
