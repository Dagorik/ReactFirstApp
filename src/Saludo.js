import React, {Component} from 'react'

class Saludo extends Component{
    constructor(props){
        super(props);
        // console.log(props)
    }
    render(){
        return(
            <div>
                <h1>{this.props.saludin} desde componente Saludo</h1>
            </div>
        )
    }
}

export default Saludo;