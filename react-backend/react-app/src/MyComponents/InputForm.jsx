import React from 'react'
import InputField from './InputField'



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
            console.log(data)                        
            console.log("Busqueda exitosa en OMDB");            
        }).catch(err => {
            console.log(err)    
            alert("No existe la pelicula en la OMDB");
        });
        


        /*****************************************************************/
        // TODO: hacer un servicio en el server Side que reciba el objeto y lo cree
     
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