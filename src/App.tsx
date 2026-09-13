import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer";

const technologiesFetch=async()=>{
  const res=await fetch('/data.json');
  const data=await res.json();
  return data;
}
function App() {
  const [technologiesPromise]=useState(()=>technologiesFetch());
  return (
    <>
    
    <Nav></Nav>
    <Banner></Banner>
    <Suspense
  fallback={
    <div className="flex justify-center items-center py-20">
      <span className="loading loading-spinner loading-lg"></span>
      <p className="ml-3">Loading technologies...</p>
    </div>
  }
>
    <Technologies technologiesPromise={technologiesPromise}/></Suspense>
    <Footer ></Footer>
    
    
    </>
  )
}

export default App
