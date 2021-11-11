import Formulaire from "./formulaire";

function Carte() {
  return (
    <div className="flex h-8/12 w-9/12 rounded-lg justify-center flex-wrap" style={{"backgroundColor": "#CDB599FF"}}>
      
      <h2 className="font-bold text-lg w-9/12 mt-2 ml-8">Elige tus detalles:</h2>

      <Formulaire/>
      
    </div>
  );
}

export default Carte;