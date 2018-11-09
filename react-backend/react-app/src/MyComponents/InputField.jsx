import React from 'react'

class InputField extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let value = e.target.value
        let name = e.target.name
        this.props.onChange(name, value)
    }

    render(){
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
                        </div>;
        return component
    }
}

export default InputField