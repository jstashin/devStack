import { use } from "react";
import Technology from "./Technology";


const Technologies = ({technologiesPromise}) => {
    const technologies=use(technologiesPromise);
    return (
        <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold">Explore the<span className="text-pink-700">Technologies</span> </h1>
        <p className="text-gray-500">Pick one technology per catergory to build your ideal stack.</p>
        <Technology technologies={technologies}/>

            
        </div>
    );
};

export default Technologies;