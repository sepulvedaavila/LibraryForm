import React from 'react'
import icons from 'glyphicons'

class InputFieldNote extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.removeMe = this.removeMe.bind(this)
    }

    handleChange(e){
        let value = e.target.value
        let name = e.target.name
        this.props.onChange(name, value)
    }

    removeMe(){
        console.log(this)
        /*var element = document.getElementById(id);*/
        this.props.onDelete(this)
    }

    render(){
        let component = <div id={this.props.id}>
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
                            <input type='button' value={icons.minus} onClick={this.removeMe}/>
                        </div>;
        return component
    }
}

export default InputFieldNote