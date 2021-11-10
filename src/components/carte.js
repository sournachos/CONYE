import Formulaire from "./formulaire";

function Carte() {
  return (
    <div className="flex h-8/12 w-9/12 rounded-lg justify-center flex-wrap" style={{"backgroundColor": "#CDB599FF"}}>
      
      <h2 className="font-bold text-xl w-9/12 text-center mt-2">Selecciona tu nombre</h2>

      <Formulaire/>
      
    </div>
  );
}

export default Carte;