import React,{Component} from 'react'
import axios from 'axios'
import Card from './Card'
import CreateArticulo from './CreateArticulo'
class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            listaArticulos: []
        }
    }

    componentDidMount(){
        axios.get('https://apitickets.herokuapp.com/api/articulos/')
        .then(resposne => {
            this.setState({
                listaArticulos:resposne.data.body.jsonResultado
            })
        })
        .catch(err => console.log(err))
    }

    getData = () => {
        if(this.state.listaArticulos.length === 0){
            return <h1>Cargando...</h1>
        }else{  
            return this.state.listaArticulos.map(articulo => <Card nombre={articulo.nombre} precio={articulo.precio}/>)
        }
    }

    render(){
        return (
            <div className="container">
                {this.getData()}
                <CreateArticulo/>
            </div>
        )
    }
}

export default Home;