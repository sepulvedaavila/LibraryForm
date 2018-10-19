import React from 'react'
import InputField from './InputField'
import swal from 'sweetalert' 




class InputForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {inputValues: {}}
        this.sendData = this.sendData.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(field,value){
        let newValues = this.state.inputValues
        newValues[field] = value
        this.setState({inputValues: newValues})
    }

    sendData(){
        let inputValues1 = this.state.inputValues
        let titulo_pelicula = "";
        for(const obj in inputValues1){
            console.log(obj+" -> "+inputValues1[obj])
            if(obj === 'titulo'){              
                titulo_pelicula = inputValues1[obj].split(' ').join('+')
                console.log(inputValues1[obj].split(' ').join('+'))
            }
        }

        fetch('http://localhost:3001/getMovie?title='+titulo_pelicula)
        .then( results => {
            return results.json();
        }).then(data => {                   
            
                console.log("Busqueda exitosa en OMDB");
                console.log(data);
                swal({
                    title: "Archivo Generado",
                    text: "tu archivo ha sido guardado y esta en espera de ser cargado al sistema",
                    icon: "success",
                    button: "aceptar",
                  });
            
        }).catch( (err) => {    
            console.log(err);            
            swal({
                title: "Error",
                text: "Ha ocurrido un error con tu busqueda",
                icon: "error",
                button: "aceptar",
              });
        });
        
        /**TODO: Permitir que el botón para resetear los fields y que se reseten los fields despues de crear el xml */
        /**TODO: Modificar el diseño del css para que sea mas amigable */
        /**TODO: Separar el boton de crear xml del servicio que busca en la API y crear uno nuevo que haga la busqueda */
        
     
    }
    render(){
        let form = this.props.fields.map(
            (field, index) =>
                <InputField
                    key={index}
                    name={field.name}
                    fieldName={field.fieldName}
                    fieldPlaceholder={field.placeholder}
                    onChange={this.inputChange}
                />
        );
        return (<form id={this.props.formId}>
                    {form} 
                    <input type='button' value='Create XML' onClick={this.sendData}/>
                </form>)
    }
}

export default InputForm