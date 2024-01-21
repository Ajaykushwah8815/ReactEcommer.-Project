import React, { useContext } from 'react';
import { BGContext } from './Strore';

function CardR({ obj,value}) {
    const { CID, D, Num, Total } = useContext(BGContext);
 
    const { CardID, setCardID } = CID;
    const { ShopData, setShopData } = D;
    let Obj=obj.Obj;

// console.log(value,obj.Obj)
    const handleRemove = () => {
        if (CardID.includes(Obj.ID)) {
            const updatedCardID = CardID.filter((id) => id !== Obj.ID);
            setCardID(updatedCardID);
            // console.log(updatedCardID);
            Num.setCount(Num.count - 1);
            Total.setTotal(Total.total - Obj.RS)
        }



    };
// let i=1;
    return (
        <div style={{ display: "contents" }}>
            <tr style={{ margin: "5px", padding: "20px" }}>
                <th>{value+1}</th>
                <td>{Obj.NAME}</td>
                <td style={{ color: "blue" }}>${Obj.RS}</td>
                <button
                    className='  bg-indigo-500 hover:bg-cyan-600  hover:scale-110 '
                    style={{ marginLeft: "25px", padding: "8px",borderRadius:"50px", marginTop:"5px" }}
                    onClick={handleRemove}
                >
                    Remove
                </button>
            </tr>
        </div>
    );
}

export default CardR;
