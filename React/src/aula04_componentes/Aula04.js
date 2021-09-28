import { Button } from "./Button/Button";
import { Name } from "./Name/Name";


const click = () => {
  return console.log("clicou no Aula04")
}

function Aula04() {
  const prof = "Andressa";
  return (
    <div className="Aula04">
      <Button title="teste de botão" onClick={click} />
      <Name text={prof} />

    </div>
  );
}

export default Aula04;
