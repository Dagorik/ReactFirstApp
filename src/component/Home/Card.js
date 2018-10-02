import React, {Component} from 'react'
import './card.css'
class Card extends Component{

    render(){
        return(
            <div className="card Item">
                {/* <img src="https://www.carlin.es/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/0/8/0806234.jpg" alt="Avatar" className="img-fluid Item"/> */}
                    <h4><b>{this.props.nombre}</b></h4> 
                    <p>${this.props.precio}</p> 
            </div>
        )
    }
}

export default Card