import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react';
import Card from './Card';
import styles from './products.module.css'

const products = () => {
  const [products,setProducts] = useState([]);

    function getData(){
        axios.get("http://localhost:8000/allproducts")
        .then(response => {
            console.log(data);
            setProducts(data.products);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
      getData();
    },[])

  return (
    <div className={styles.products}>
      {
        products.map(ele => {
          return <Card products={ele} key={ele.id}/>
        })
      }
    </div>
  )
}

export default products