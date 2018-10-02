import React,{Component} from 'react'

class Despedida extends Component{

    constructor(props){
        super(props);
        this.state = {
            espera:true
        }
    }

    getDespedida = () => {
        if (this.state.espera === true ){
            return <h1>Cargando....</h1>    
        }else{
            return <h1>Ya terminé</h1>    
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                espera:false
            })
        },4000)
    }

    render(){
        return (
            <div>
                <h1>Adios desde componente despedida</h1>
                {this.getDespedida()}
            </div>
        )
    }

}

export default Despedida;