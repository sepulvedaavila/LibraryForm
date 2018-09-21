import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <input type='button' value={this.props.label} />
    }
}

export default Button