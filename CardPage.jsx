import React, { useContext, useEffect, useState } from 'react';
import { BGContext } from './Strore';
import { Link, useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import "./Cardpage.css"
function CardPage() {
  const { T } = useContext(BGContext);
  const { CardID } = useParams();
  const [cardPage, setCardPage] = useState(null);

  useEffect(() => {
    if (T && T.TD) {
      const targetObj = T.TD.find((obj) => obj.ID === parseInt(CardID));
      setCardPage(targetObj);
    }
  }, [T, CardID]);

  // console.log(cardPage);

  return (
    <div>
      {cardPage && (
        <div className="">
          <div className=" flex-grow  bg-base-300 rounded-box place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl flex flex-row "style={{    width: "99vw",
    height: "50vh"}} >
             <div style={{    width: "50%"}} className=''>
              <img src={cardPage.URL} alt={cardPage.NAME} style={{width: "100%",    height: "-webkit-fill-available" }} />
              </div>
              <div className="card-body">
                <h2 className="card-title flex justify-center " style={{fontSize:"xxx-large"}}>
                  {cardPage.NAME}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-bold flex justify-center ' style={{marginTop :"50px",fontSize:"x-large"}}>{cardPage.DESC}</p>
                <div className="card-actions flex justify-evenly">
                  <span className='font-bold text-blue-700 ' style={{ fontWeight: "900", fontSize: "xx-large", textAlign: "-webkit-center" }}>${cardPage.RS}</span>
                  <Link to={"/Payment"}><button className="badge badge-outline p-[20px]  hover:bg-cyan-600 bg-blue-600 hover:scale-150 " style={{padding:"25px",fontSize:"xx-large"}}>Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex overflow-scroll">
          <div className="flex-wrap " style={{
                    display: "flex",
                    justifyContent: "space-evenly", marginTop: "0",backgroundColor: "azure"
                
                }}>
                    {
                         T.TD.map((obj) => {
                            return <MovieCard  key={obj.ID} obj={obj}></MovieCard>
                        })
                    }
                </div>

            
          </div>
        </div>
      )}
    </div>
  );
}

export default CardPage;
