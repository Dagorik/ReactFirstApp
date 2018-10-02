import React,{Component} from 'react' 
import axios from 'axios'

class CreateArticulo extends Component{

    constructor(props){
        super(props)
        this.state = {
            producto:"",
            precio:""
        }
    }

    onInputChange = (e) => { 
        let {id,value} = e.target
        console.log(id,' :' + value)
        this.setState({
            [id]:e.target.value
        })
    }

    onFomrSubmit = (e) => {
        e.preventDefault()
        console.log('El submit')
        console.log(this.state)
        let json = {
            nombre:this.state.producto,
            precio:this.state.precio
        }
        axios.post('https://apitickets.herokuapp.com/api/articulos/',json)
            .then(articulo =>{
                    console.log(articulo)
                    alert(`Se guardo con exito tu articulo ${this.state.producto}`)
            } )
            .catch(err =>{
                console.log(err);
                alert('Tuvimos un error en el servidor')
            })
    }

    render(){
        return(
            <form onSubmit={this.onFomrSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nombre del prodcuto</label>
                    <input id="producto" type="text" class="form-control"  
                    placeholder="Nombre de tu producto"
                    onChange={this.onInputChange}
                    value={this.state.producto}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Precio</label>
                    <input id="precio" type="number" class="form-control"  
                    placeholder="Precio"
                    onChange={this.onInputChange}
                    value={this.state.precio}/>
                </div>
                <button type="submit" className="btn btn-success">Guardar producto</button>
                </form>
                        )
    }

}
export default CreateArticulo;