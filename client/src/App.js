import BasDePage from './components/basdepage.js';
import Carte from './components/carte.js'
import Navvy from './components/navvy.js';
import Titre from './components/titre.js';

function App() {
  return (
    <div className="flex flex-col flex-wrap h-screen w-screen bg-green-200 justify-start items-center">
      
    <Navvy/>

    <Titre/>

    <Carte/>

    <BasDePage/>

    </div>
  );
}

export default App;
