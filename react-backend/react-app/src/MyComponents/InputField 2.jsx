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
        let component = <div>
                            <label>{this.props.fieldName}</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input name={this.props.name} type='text' 
                            placeholder={this.props.fieldPlaceholder}
                            onChange={this.handleChange}/>
                        </div>;
        return component
    }
}

export default InputField