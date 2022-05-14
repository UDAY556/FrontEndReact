import React, { useState } from "react";


let Items = [
  {
    id:"1",
    title:"Grinder",
    imageSourceLink:"https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/MothersDay/GW/QuadImageCard/Desktop/Mom_25_GW_QuadImageCard_Desktop_372x232._SY232_CB623622619_.jpg"
  },
  {
    id:"2",
    title:"Jewerly",
    imageSourceLink:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_J_186x116_Evergreen_Oct_2021._SY116_CB640520999_.jpg"

  },
]


function removeItemByKey(id) {

  console.log("removing key ")
  console.log(id)

  Items  =  Items.filter((item)=> item.id!=id)

  console.log("value after updating items") 
  console.log(Items)

}





// default and named export and import



function Item ({id,setItems, title, imageSourceLink}) {
    
  return (
      <div className="container"> 
      <img src={imageSourceLink}/>
      <div 
      onClick={()=> {console.log("clicked")}}   
      className="item-name">
          {title}
      </div>
      <button   onClick={()=>{setItems(Items.filter((item)=>id!==item.id))}}>Remove Item</button>
      </div>   
      )
}


function ItemList () {


  const [items, setItems] =  useState(Items);




   return (
   <React.Fragment>
   {items.map((item)=><Item  setItems = {setItems}  key={item.id}  id = {item.id} imageSourceLink={item.imageSourceLink} title={item.title} />)}
   </React.Fragment>
   );

}




export default ItemList;