import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function app(){

    const [products,setProducts] = useState([]);
    const getProducts = async()=>{
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
      const data = await response.json();
      setProducts(data.recipes);
    }

    useEffect( ()=>{
      getProducts();
    },[]);

    return (
      <div className=' text-white text-center py-3'>
        <div className='container'>
          <div className='row'>
            {products.map( product => 
              <div className='col-lg-4'>
                <div className='card'>
                  <div className='card-body'>
                        <div className='product'>
                          <h2>{product.title}</h2>
                          <img src={product.image_url} className='card-img-top' alt="" />
                        </div>
                      </div>
                    </div>
              </div>
            )}
          </div>
        </div>

      </div>
    )
}