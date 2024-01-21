import React, { useContext, useState, useEffect } from 'react';
import { BGContext } from './Strore';
import CardR from './CardR';

function CardRow() {
  const [arr, setArr] = useState([]);
  const { CID, D,Total } = useContext(BGContext);
  let {CardID,setCardID}=CID;
  let {ShopData,setShopData}=D;

  let getObjData = () => {
    let objArray = [];
    for (let i = 0; i < CardID.length; i++) {
      let id = CardID[i];
      for (let j = 0; j < ShopData.length; j++) {
        if (id === ShopData[j].ID) {
          objArray.push(ShopData[j]);
          break;
        }
      }
    }
    setArr(objArray);
  };

  // console.log(arr);
  useEffect(() => {
    getObjData();
  }, [CardID]);

  return (
    <div style={{height:" 50vh",overflowY:"scroll"}}>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th style={{fontSize:"large"}}>S.No.</th>
              <th style={{fontSize:"large"}}>Product Name</th>
              <th style={{fontSize:"large"}}>Product Price</th>
              <th style={{fontSize:"large"}}>Remove from Card</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((Obj,i) => (
              <CardR key={i} obj={{Obj}} value={i} />
            ))}
          </tbody>

          <thead>
            <tr>
              <th></th>
              <th className='text-black ' style={{fontSize:"large"}}>Total Amount</th>
              <th style={{fontSize:"large",color:"blue"}}>${Total.total}</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default CardRow;
