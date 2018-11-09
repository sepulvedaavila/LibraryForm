import React from 'react'
import InputFieldNote from './InputFieldNote'


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

    render(){
        let form = this.props.fields.map(
            (field, index) =>
                <InputFieldNote
                    key={index}
                    name={field.name}
                    tag={field.name+"_tag"}
                    tagindex={field.name+"_index"}
                    fieldName={field.fieldName}
                    fieldPlaceholder={field.placeholder}
                    onChange={this.inputChange}
                />
        );
        return (<form id={this.props.formId}>
                    {form} 
                    <input type='button' value='Generate XML' onClick={this.sendData}/>
                </form>)
    }
}

export default InputForm