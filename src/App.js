import './App.css';
import Allposts from './BlogComponents/Allposts';
import Bloglist from './BlogComponents/Bloglist';
import NewBlog from './BlogComponents/newBlog';


function App() {
  return (
    <div className="App">
     <nav className='mx-auto'>
       <div className="flex items-center justify-center font-['Gilroy']">
         <div>
       <h2 className="mt-20 text-3xl font-semibold mr-12">Whitney's Space</h2>
         </div>
         <div>
         </div>
       </div>

     </nav>
     <section>
      {/*  <Bloglist /> */}
      <Allposts />
     </section>
      
    </div>
  );
}

export default App;
