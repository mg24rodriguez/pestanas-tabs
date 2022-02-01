import {useState} from 'react';
import "../App.css"

function Tabs (){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)  => {
        setToggleState(index);
    };

    return (
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
            HTML
            </button>

            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
            Javascript
            </button>

            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
            React JS
            </button>
          </div>
    
          <div className="content-tabs">
            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <h2>HTML</h2>
              <p>
              Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.
              Define el significado y la estructura del contenido web.
              </p>
            </div>
    
            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <h2>JavaScrip</h2>
              <p>
              JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
              </p>
            </div>
    
            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <h2>React</h2>
              <p>
              React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
              </p>
            </div>
          </div>
        </div>
      );
    }

export default Tabs;
