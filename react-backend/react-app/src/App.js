import React, { Component } from 'react';
import './App.css';
import InputForm from './MyComponents/InputForm';

// TODO: Create a new set of Fields according to the registration document.  please check new pushes with the document

class App extends Component {
  render() {
    const fields= [
      { name: 'codigo_idioma',fieldName: 'Código idioma', placeholder: 'Type something'},
      { name: 'clasificacion_dewey', fieldName: 'Clasificación Dewey', placeholder: 'Type something'},
      { name: 'autor_personal', fieldName: 'Autor personal', placeholder: 'Type something'},
      { name: 'titulo', fieldName: 'Título', placeholder: 'Type something'},
      { name: 'pie_imprenta', fieldName: 'Pie de imprenta', placeholder: 'Type something'},
      { name: 'descr_fisica', fieldName: 'Descripción física', placeholder: 'Type something'},
      { name: 'nota_general1', fieldName: 'Nota General', placeholder: 'Type something'},
      { name: 'nota_creacion', fieldName: 'Nota creación', placeholder: 'Type something' },
      { name: 'nota_particular', fieldName: 'Nota particular', placeholder: 'Type something' },
      { name: 'nota_resumen', fieldName: 'Nota resumen', placeholder: 'Type something' },
      { name: 'nota_audiencia', fieldName: 'Nota audiencia', placeholder: 'Type something' },
      { name: 'sistema_detalles', fieldName: 'Sistema detalles', placeholder: 'Type something' },
      { name: 'nota_idioma', fieldName: 'Nota de Idioma', placeholder: 'Type something' },
      { name: 'nota_premios1', fieldName: 'Nota de premios', placeholder: 'Type something' },
      { name: 'material_gral', fieldName: 'Material General', placeholder: 'Type something' },
      { name: 'coautor_pers', fieldName: 'Coautor personal', placeholder: 'Type something' }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Catalogación de películas y videograbaciones</h1>
        </header>
        <InputForm formId='mainForm' fields={fields}/>
      </div>
    );
  }
}

export default App;
