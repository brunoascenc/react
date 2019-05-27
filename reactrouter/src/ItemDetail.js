import React, {useState, useEffect} from 'react'
import './App.css'

function ItemDetail({match}) {
  useEffect(() => {
    fetchItem()
    console.log(match)
  }, [])

  const [item, setItem] = useState({
      images: {}
  })

  const fetchItem = async () => {
    const item1 = await fetch (`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)

    const item2 = await item1.json()
    setItem(item2)
    console.log(item2)
  }


  return (
    <div>
       <h1>{item.name}</h1>
       <img src={item.images.transparent}></img>
    </div>
  );
}

export default ItemDetail;
