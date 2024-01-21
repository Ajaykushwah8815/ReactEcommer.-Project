import React, { useContext } from 'react'
import { BGContext } from './Strore'

function Slider() {


    let A=useContext(BGContext);
    // let N=useContext(BGContext);
    let {num ,setNum}=A.N
    // console.log(num)

//   console.log(A.A.a[2].bg);
    let Prev=()=>{
        if(num==0){
            setNum(5);
        }
        else{
            setNum(num-1)
        }
    }
    console.log(num)
    let bg=A.A.a[num].bg

    let Next =()=>{
        if(num==5){
            setNum(0);
        }else{
            setNum(num+1);

        }
    }

    // const backgroundStyle = {
    //     backgroundImage: 'url("https://images.freekaamaal.com/post_images/1575628876.png")',
    //     // backgroundSize: 'cover', // You can customize the background size
    //     // backgroundRepeat: 'no-repeat', // You can customize the background repeat
    //     // Other background properties can be added as needed
    // // backgroundColor:" antiquewhite"
    // paddingTop:"9vh"
    // };
     return (
        <div style={{backgroundImage: `url(${bg})`,  height:" 50vh",
        /* margin: 2%; */
        paddingLeft:" 20%",
        paddingRight: "20%",
        paddingTop:"10px",
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover",
        paddingBottom:"10px"}}  >
        {/* <div className="carousel w-full"> */}
  {/* <div id="slide1" className="carousel-item relative w-full"> */}
    {/* <img src={bg} className="w-full" style={{  } }/> */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style={{paddingBottom:"25vh"}}>
      <a  className="btn btn-circle bg-black text-white " onClick={Prev}>❮</a> 
      <a className="btn btn-circle bg-black text-white" onClick={Next}>❯</a>
    </div>
  </div>
// </div>
    // </div>
  )
}

export default Slider