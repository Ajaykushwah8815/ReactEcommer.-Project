import React, { useEffect, useState ,useContext } from 'react'
// import Banner from './Banner'
// import { useMemo } from 'react';
import MovieCard from './MovieCard'

import Slider from './Slider'
import { BGContext } from './Strore';


const Home = () => {
    
    let [ShopData, setShopData] = useState([]);
    // let [displayData , setDisplayData] = useState([]);
    // let {Query } = useContext(SearchContext);

    // console.log("query from home " , Query)
    // let {Query } = q;

    // useEffect(()=>{
    //     let filteredArray = movieData.filter((obj)=>{
    //         return obj.title.toLowerCase().includes(Query.toLowerCase())
    //     })
    //     setDisplayData(filteredArray);
       
    // },[Query])



    let {T}=useContext(BGContext)
   

    // console.log(Shop.Data.Api);

    // let arr=Shop.Data.Api;

    

    // useEffect(() => {
    //     // Assuming shop.Data.Api is an array, setMovieData with the array
    //     D.setShopData([...Data.Api]);
    //     T.setTD([...Data.Api]);
    // },[]  )
  
        
        // Filter movies with TYPE="E" and log the result
        // const newArr = ShopData.filter((obj) => obj.TYPE === "E");
        // console.log(newArr)
   
 
      

    // setMovieData(arr);
    // console.log(movieData);

    // let getData = () => {


    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjI5MWIyZGZiMDk1MGI4YjBkNTU2NTUzNDkxYjg0ZCIsInN1YiI6IjY1OWU4N2M0NzEzZWQ0MDFhMmRkZTJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G-ty-cWGMoczycqpWKa32sq_f0FzJXlpmf4Zd0SlKRQ'
    //         }
    //     };

    //     fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    //     .then(response => response.json())
    //         .then((response)=>{
    //             // setMovieData(response.results)
                

    //         }).catch(err => console.error(err));


    // };



//     const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjI5MWIyZGZiMDk1MGI4YjBkNTU2NTUzNDkxYjg0ZCIsInN1YiI6IjY1OWU4N2M0NzEzZWQ0MDFhMmRkZTJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G-ty-cWGMoczycqpWKa32sq_f0FzJXlpmf4Zd0SlKRQ'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

    // useEffect(() => {
    //     getData();
    // }, [])




    return (
        <div  className='bg-current	'>
            <div className="banner min-h-screen-1/2">
               <Slider></Slider>
            </div>


            <div className="flex-wrap d-flex align-items-stretch " style={{
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
    )
}

export default Home