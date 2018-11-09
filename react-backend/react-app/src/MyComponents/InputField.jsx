import React from 'react'
import InputFieldNote from './InputFieldNote'
import icons from 'glyphicons'
import ReactDOM from 'react-dom'

class InputField extends React.Component{
    constructor(props){
        super(props)
        this.state = {add_Field:'', added_fields:0}
        this.handleChange = this.handleChange.bind(this)
        this.addField = this.addField.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    handleChange(e){
        let value = e.target.value
        let name = e.target.name
        this.props.onChange(name, value)
    }

    onDelete(e){
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(e).parentNode);
    }

    addField(){
        console.log("adding field")
        let curr_amount = this.state.added_fields
        this.setState({ added_fields: curr_amount+1})
        let name = this.props.name
        let curr_add = this.state.add_Field
        let new_add = <div>{curr_add}
                                <InputFieldNote                                    
                                    name={name + "_extra"}
                                    fieldPlaceholder={"Campo extra de " + name}
                                    onChange={this.handleChange}
                                    id={this.state.added_fields}
                                    onDelete={this.onDelete}/>
                            </div>
        this.setState({ add_Field: new_add })
    }

    render(){
        let aux = '';
        if (this.props.name === 'nota_general1' || this.props.name === 'nota_premios1'){
            aux =   <div>
                        <input type="button" value={icons.plus} onClick={this.addField}/>
                    </div>
        }
        let component = <div className="row-labels-and-inputs">
                            <div className="labels-marc">
                                <label>{this.props.fieldName}</label>
                            </div>
                            
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