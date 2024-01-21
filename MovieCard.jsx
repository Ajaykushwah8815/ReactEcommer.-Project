import React, { useContext } from 'react'
import { BGContext } from './Strore'
import { Link } from 'react-router-dom'

const MovieCard = ({ obj }) => {

  let { Num, CID,Total ,D} = useContext(BGContext)



  let AddCard = (ID) => {
    if (CID.CardID.includes(ID)) {
      
      let N = CID.CardID.filter((e) => { e != ID })
      let O= D.ShopData.filter((e)=>{return e.ID===ID})
      // console.log(O[0].RS)
      CID.setCardID(N);
      Num.setCount(Num.count - 1);

      Total.setTotal(Total.total-O.RS)
    }
    else {
      
      CID.setCardID([...CID.CardID, ID]);
      Num.setCount(Num.count + 1);
      let O= D.ShopData.filter((e)=>{return e.ID===ID})
// console.log(O);
      Total.setTotal(Total.total+O[0].RS)



    }
    // console.log(CID.CardID);



  }
  // console.log(obj)


  return (



    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:scale-110" style={{ height: "50vh", overflow: "auto", marginTop: "35px", marginBottom: "35px" }}>
       <Link to={"/Card/" + obj.ID}  ><img src={obj.URL} alt="Shoes" style={{ height: "31vh",width: "100%" }} /></Link>
        <div className="card-body">
          <h2 className="card-title">
            {obj.NAME}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{obj.DESC}</p>
          <div className="card-actions flex justify-between">
            <span className='font-bold text-blue-700 ' style={{
              fontWeight: "900",
              fontSize: "x-large",
              textAlign: "-webkit-center"
            }}>${obj.RS}</span>
            <Link to={"/Payment"}><button className="badge badge-outline p-[15px] bg-blue-600 ">Buy</button></Link>
            <button className="badge badge-outline p-[15px] bg-blue-600 " onClick={() => {
              if (CID.CardID.includes(obj.ID)) {
                alert("Already added, remove from Carts");
              } else {
                AddCard(obj.ID);
              }
            }}>{CID.CardID.includes(obj.ID) ? "Added" : "Add to Cart" }</button>
          </div>
        </div>
      </div>
    </div>

    // <div className="zoom card card-compact w-1/4 bg-base-100 shadow-xl mx-3 my-3 min-h-full overflow-auto delay-200 cursor-pointer cardh static  hover:scale-110" style={{
    //   backgroundColor: "khaki", height: " 47vh"

    // }}>
    //   <figure><img className='h-full boxCard' src={obj.URL} alt="Shoes" /></figure>
    //   <div className="card-body mx-0 text-gray-950" style={{
    //     display: "flex",
    //     justifyContent: "flex-end",

    //     // paddingLeft: "6px"
    //   }}>


    //     <p className='font-bold'>{obj.NAME}</p>
    //     <p>{obj.DESC}</p>
    //     <span className='font-bold text-blue-700 ' style={{
    //       fontWeight: "900",
    //       fontSize: "x-large",
    //       textAlign: "-webkit-center"
    //     }}>${obj.RS}</span>

    //     <div className="card-actions justify-between">
    //     <button className="btn btn-primary hover:bg-sky-700 b"  >Buy Now</button>
    //     <button className="btn btn-primary hover:bg-sky-700 b" onClick={()=>{ AddCard(obj.ID)}}>{CID.CardID.includes(obj.ID)?"Added":"Add to Card"}</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MovieCard

