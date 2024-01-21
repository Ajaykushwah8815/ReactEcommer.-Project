import React, { useState } from 'react'
import { useContext,useEffect } from 'react'
import { BGContext } from './Strore'
import { Link } from 'react-router-dom'

function Navbar() {
 let {T,D,Data,Num,Total,I}=useContext(BGContext)
 let [query,setQuery]=useState("");

//   useEffect(() => {
//     // Assuming shop.Data.Api is an array, setMovieData with the array
//     D.setShopData([...Data.Api]);
//     T.setTD([...Data.Api]);
// },[]  )

useEffect(() => {
  if(I.input!=""){

  
  let filteredArray = D.ShopData.filter((obj) => {
      return obj.NAME.toLowerCase().includes(I.input.toLowerCase())
  })
  T.setTD(filteredArray); 
}
  else{

  D.setShopData([...Data.Api]);
  T.setTD([...Data.Api]);
  
  }
 

}, [I.input])






// useEffect(() => {
//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data); 

//       D.setShopData([...data.products]);

//       T.setTD([...data.products]);
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, []);

  // console.log(T.TD);
//   let {TD,setTD}=TempData;
//   let {ShopData,setShopData}=D;


let handleElec=()=>{
  const newArr = D.ShopData.filter((obj) => obj.TYPE === "E");
  T.setTD([...newArr]);
}

let handleFash=()=>{
  const newArr = D.ShopData.filter((obj) => obj.TYPE === "F");
  T.setTD([...newArr]);
}
// console.log(D.ShopData)

let handle200=()=>{
  const newArr = D.ShopData.filter((obj) => obj.RS < 500);
  T.setTD([...newArr]);
}
let handle1000=()=>{
  const newArr = D.ShopData.filter((obj) => obj.RS < 10000);
  T.setTD([...newArr]);
}

let handleAll=()=>{
  const newArr = D.ShopData.filter((obj) => obj.RS > 0);
  T.setTD([...newArr]);
}

  
let searchHandler=()=>{
  // console.log(query);
  I.setInput(query);
  // console.log(I.input)
  setQuery("");

}






  








  return (
    <div> 
        <div className="navbar bg-neutral text-neutral-content ">
  <div className="flex-1">
    <button className="me-8 ms-3" style={{backgroundColor:" transparent"}}> <Link to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar23UbtExj7U21huB4bqQr9beXcIJOSqQMA&usqp=CAU" alt=""className='bg-slate-50	' style={{height:"50px",width:"50px",borderRadius:"50%"}} /></Link></button>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><button className='bg-black text-white hover:bg-cyan-600 ' style={{border: "1px solid"}} onClick={handleElec} >Electronic</button></li>
      <li>
        <details>
          <summary>Under Amount</summary>
          <ul className="p-2 text-black">
            <li><button onClick={handle200}>Under $500</button></li>
            <li><button onClick={handle1000} >Under #10000</button></li>
            <li><button onClick={handleAll} >All Price</button></li>
          </ul>
        </details>
      </li>
      <li><button className=' bg-black text-white hover:bg-cyan-600' style={{border: "1px solid"}} onClick={handleFash}>Fashion</button></li>
    </ul>
  </div>
    
  </div>
  <div className="dropdown dropdown-end me-6 hover:bg-sky-900" style={{border:" 4px solid",
    padding: "8px",
    paddingLeft:"10px",
    paddingRight:"10px",
    borderRadius: "50px"
   }}>
      {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  me-8 "> */}
        <div  tabIndex={0} role="button"  className="indicator ">
        <span>Cart</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">{Num.count}</span>
        </div>
      {/* </div> */}
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="text-lg text-black">Total Items : <span className='text-blue-700'>{Num.count}</span></span>
          <span className=" text-lg text-black flex  " style={{flexDirection:"column" ,justifyContent:"center"}}> <span>Total Amount :</span> <span className='text-blue-700 ' style={{alignItems:'center',marginLeft:"40px"}}>$ {Total.total}</span></span>
          <div className="card-actions">
           <Link to={"ViewCard"}>  <button className="btn btn-primary btn-block hover:bg-sky-700 ml-5" >View cart</button></Link>
          </div>
        </div>
      </div>
      </div>
  
  <div className="flex-none gap-2   ">
    <div className="flex flex-row  me-8">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black me-3" onChange={(e)=>{setQuery(e.target.value)}} value={query} />
      <button className="btn btn-ghost btn-circle hover:bg-cyan-600 bg-blue-700" onClick={searchHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
    <div className="dropdown dropdown-end  ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://www.researchgate.net/publication/221609858/figure/fig1/AS:305558352613378@1449862196661/A-classic-GhostScript-SVG-example.png" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
        <Link to={"/Profile"}><li>
          <button className="justify-between" >
            Profile
            <span className="badge">New</span>
          </button>
        </li></Link>
        <li><button>Settings</button></li>
        <Link to={"/"}><li><button>Logout</button></li></Link>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar