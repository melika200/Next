import ProductCard from "@/components/productCard/ProductCard"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Productsbrand(){
    const {brand}=useRouter().query
    const[laptop,setLaptop]=useState([])
    useEffect(()=>{
      setLaptop(getLaptop(brand))
    },[brand])
    const getLaptop=(brand)=>{
      return db.laptop.filter(laptop=>laptop.brand==brand)
    }


    return(
        <>
        <div className="container">
          <h1>{brand}</h1>
          <div className="row">
            {
              laptop.map(lap=>(
                <div className="col">
                  <ProductCard {...lap}/>
                </div>
              ))
            }
          </div>
        </div>
        </>
    )
}