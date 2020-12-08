import React from 'react'
import './css/products.css'
import { Link } from 'react-router-dom'


const Produtos = () => {

    const [products, setProducts] = React.useState(null);


    React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then((response) => response.json())
     .then((json) => setProducts(json));
    }, []);

    return (
        <>
       { products && ( 
       
       <div className="all-products">
        {products.map((product) => (
             <div className="whole-product">
                 <Link to={'produto/'+product.id}>
                  <img src={product.fotos[0].src} alt="" srcset=""/></Link>
                  <h3>{product.nome}</h3>
           </div>
          ))}

       </div>

       ) }    
        </>
    )
}

export default Produtos
