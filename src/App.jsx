import "./styles.css";
import { useState } from "react";
import { RegaloList } from "./components/RegaloList";
import { RegaloForm } from "./components/RegaloForm";

/*
dia 8 inclusive:
1- lista de 3 regalos
2- css basico
3- formulario con input para agregar regalos
4- boton para eliminar regalos individualmente
5- boton para eliminar todos los regalos
6- mensaje para lista vacia
7- validador para campo vacio y para item repetido
8- campo input numerico  para multiples regalos
*/

export default function App() {
  const [list, setList] = useState([
    {
      nombre: "chocolates",
      cantidad: 2,
    },
    {
      nombre: "vitel tone",
      cantidad: 1,
    },
    {
      nombre: "pan dulce",
      cantidad: 3,
    },
  ]);
  const [inputNum, setInputNum] = useState(1);
  const [inputText, setInputText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let regaloObjeto = {
      nombre: inputText,
      cantidad: inputNum,
    };
    //si el campo de regalos no esta vacio y el valor no existe en la lista, lo agrego al array principal
    //como un nuevo objeto. esto probablemente se puede mejorar usando algun tipo de interfaz o estandarizacion,
    //no creo que sea una buena idea crear un objeto nuevo, pero no se me ocurre como mejorarlo.
    if (inputText && !list.find(({ nombre }) => nombre === inputText)) {
      setList([...list, regaloObjeto]);

      //pregunto que tipo de error es y muestro el mensaje correspondiente
      //no creo que sea una buena idea usar "else if" aca. esto zafa porque son dos tipos de errores que
      //puede haber nomas. probablemente haya que hacer una funcion de validacion aparte y usar un switch por
      //cada mensaje de error que quiero mostrar
    } else if (!inputText) {
      displayErrorMsg("El campo no puede estar vacio");
    } else {
      displayErrorMsg("Este articulo ya esta en la lista");
    }

    limpiarCampos();
  };

  //muestro un mensaje de error en caso de que no pase el validador, que desaparece en 2 segundos
  const displayErrorMsg = (msg) => {
    setErrorMsg(msg);
    setErrorDisplay(true);
    setTimeout(() => {
      setErrorDisplay(false);
    }, 2000);
  };

  //capturo el valor del input de texto
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  //capturo el valor del input numerico
  const handleNumChange = (e) => {
    setInputNum(e.target.value);
  };

  //borro un item de la lista usando filter sobre la lista, preguntando si el indice en la lista es diferente
  //al que recibe la funcion (que es el indice del item a borrar), de esta manera el filtro solo quitaria el item que quiero.
  const handleDeleteItem = (index) => {
    setList(list.filter((item) => list.indexOf(item) !== index));
  };

  const handleDeleteAll = () => {
    setList("");
  };

  const limpiarCampos = () => {
    setInputText("");
    setInputNum(1);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          {/* error display podria ser su propio componente pero no me parecio que valga la pena,
        ya estoy haciendo bastante prop drilling */}
          {errorDisplay && (
            <div>
              <p>{errorMsg}</p>
            </div>
          )}
          <RegaloForm
            onSubmit={handleSubmit}
            onTextChange={handleTextChange}
            onNumChange={handleNumChange}
            inputNum={inputNum}
            inputText={inputText}
          />
          <div>
            <RegaloList list={list} deleteItem={handleDeleteItem} />
            <button className="btn" onClick={handleDeleteAll}>
              Borrar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
