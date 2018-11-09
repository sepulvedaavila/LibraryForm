import React from 'react'

class InputFieldNote extends React.Component{
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
                            <div className="labels-marc"></div>                            
                            <input hidden className="short-inputs" name={this.props.name+"_tag"} type='text' 
                            placeholder={'etiqueta'}
                                onChange={this.handleChange}/>                            
                            <input className="short-inputs" name={this.props.name+"_name"} type='text'
                                placeholder={'índice'}
                                onChange={this.handleChange} />
                            
                            <input className="" name={this.props.name} type='text'
                                placeholder={this.props.fieldPlaceholder}
                                onChange={this.handleChange} />
                        </div>;
        return component
    }
}

export default InputFieldNote