import React from 'react'
import InputFieldNote from './InputFieldNote'

class InputField extends React.Component{
    constructor(props){
        super(props)
        this.state = {add_Field:''}
        this.handleChange = this.handleChange.bind(this)
        this.addField = this.addField.bind(this)
    }

    handleChange(e){
        let value = e.target.value
        let name = e.target.name
        this.props.onChange(name, value)
    }

    addField(){
        console.log("adding field")
        let name = this.props.name
        let curr_add = this.state.add_Field
        let new_add = <div>{curr_add}
                                <InputFieldNote
                                    name={name + "_extra"}
                                    fieldPlaceholder={"Campo extra de " + name}
                                />
                            </div>
        this.setState({
            add_Field: new_add})
    }

    render(){

        let component = <div className="row-labels-and-inputs">
                            <div className="labels-marc">
                                <label>{this.props.fieldName}</label>
                            </div>
                        </div>
        let aux = '';
        if (this.props.name === 'nota_general1' || this.props.name === 'nota_premios1'){
            aux = <input type="button" value="Agregar campo adicional" onClick={this.addField}/>
        }
        let component = <div>
                            <label>{this.props.fieldName}</label>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="short-inputs" name={this.props.name} type="text" placeholder="etiqueta"/>
                            <input className="short-inputs" name={this.props.name} type="text" placeholder="índice"/>
                            <input name={this.props.name} type='text' 
                            placeholder={this.props.fieldPlaceholder}
                            onChange={this.handleChange}/>
                            {aux}
                            {this.state.add_Field}
                        </div>;
        return component
    }
}

export default InputField