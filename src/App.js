import './App.css';
import Bloglist from './Bloglist';
import NewBlog from './newBlog';


function App() {
  return (
    <div className="App">
     <nav className='mx-auto'>
       <div className="flex items-center justify-center font-['Gilroy']">
         <div>
       <h2 className="mt-20 text-3xl font-semibold mr-12">Whitney's Space</h2>
         </div>
         <div>
         <input type='button' value='Add new' className='mt-20 bg-black text-white px-3 py-1 text-sm rounded-sm hover:bg-slate-900' />
         </div>
       </div>

     </nav>
     <section>
       <Bloglist />
       <NewBlog />
     </section>
      
    </div>
  );
}

export default App;
