import React from "react";
import { useParams } from "react-router-dom";
import FanartPage from "./FanartPage";

export default function CategoryPage() {
  const {categoryId} = useParams();
  console.log(categoryId)

  

  return (
    <>
      <div>CategoryPage</div>
      <>
      {categoryId === "fanart" ? (<FanartPage />) : (<div></div>)}
      </>
      
    </>
  )


}
