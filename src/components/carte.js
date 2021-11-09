import Formulaire from "./formulaire";

function Carte() {
  return (
    <div className="flex h-7/12 w-9/12 rounded-lg justify-center flex-wrap" style={{"backgroundColor": "#CDB599FF"}}>
      
      <h2 className="w-8/12 text-center mt-2">Trip to ETC</h2>

      <Formulaire/>
      
    </div>
  );
}

export default Carte;