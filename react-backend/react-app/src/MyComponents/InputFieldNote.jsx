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
                            <br/>
                            <input name={this.props.name+"_tag"} type='text' 
                            placeholder={'Tagname'}
                                onChange={this.handleChange}/>
                            <br/>
                            <input name={this.props.name+"_name"} type='text'
                                placeholder={'Index for the tag'}
                                onChange={this.handleChange} />
                            <br/>
                            <input name={this.props.name} type='text'
                                placeholder={this.props.fieldPlaceholder}
                                onChange={this.handleChange} />
                        </div>;
        return component
    }
}

export default InputFieldNote