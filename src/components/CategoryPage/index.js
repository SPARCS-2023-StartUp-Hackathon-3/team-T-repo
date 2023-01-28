import React from "react";
import { useParams } from "react-router-dom";
import FanartPage from "./FanartPage";

export default function CategoryPage() {
  const {categoryId} = useParams();

  return (
    <>
      <div>CategoryPage</div>
      <>
      {categoryId === "fanart" ? (<FanartPage />) : (<div></div>)}
      </>
      
    </>
  )


}
