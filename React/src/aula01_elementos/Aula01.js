const titulo2 = "Meu titulo 2";

const Elemento1 = () => <h1>Elemento 1</h1>
const Elemento2 = () => <Elemento1 />
const Elemento3 = (props) => <h1>{props.andressa}</h1>

function Elemento4(props) {
  const { color, text } = props;
  return (
    <div style={{ backgroundColor: color }}>
      {text}
    </div>
  )
}

function Elemento5(props) {
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      {props.children}
    </div>
  )
}

const click = (item) => {
  return console.log("clicou no", item)
}

const lista = ["item1", "item2", "item3", "item4"]

function Aula01() {
  const prof = "Professora 2"
  const teste = true;
  return (
    <div className="Aula01">
      <h1>{titulo2}</h1>
      <Elemento2 />
      <Elemento3 andressa={teste ? prof : 'erro'} title={"Cotemig"} title2={"Cotemig2"} />
      <Elemento4 color="green" text="Elemento4 1 novo" />
      <Elemento4 color="red" text="Elemento4 2 novo" />
      <Elemento4 color="blue" text="Elemento4 3 novo" />

      <Elemento5>
        <div>
          <h1>Elemento 5</h1>
          <h2>Elemento 5.1</h2>
        </div>
      </Elemento5>

      <Elemento5>
        <div>
          <h1>Elemento 55</h1>
          <h2>Elemento 55.1</h2>
        </div>
      </Elemento5>

      <div onClick={click}>
        <h1>clique</h1>
      </div>

      <ul>
        {
          lista.map((item, index) =>
            <li key={index} onClick={() => click(item)}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default Aula01;
