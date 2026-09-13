import { FaCheck, FaStar } from "react-icons/fa6";

const Technology = ({
  technologies,
  stack,
  handleAddToStack
}) => {

  const getBadgeColor = (badge) => {
    if (badge === "Popular") {
      return "bg-blue-100 text-blue-500";
    } 
    else if (badge === "Versatile") {
      return "bg-green-100 text-green-600";
    } 
    else if (badge === "Fast") {
      return "bg-orange-100 text-orange-500";
    } 
    else if (badge === "Top SQL") {
      return "bg-blue-100 text-blue-600";
    } 
    else if (badge === "Essential") {
      return "bg-sky-100 text-sky-600";
    } 
    else {
      return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {technologies.map((technology) => {

        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <div
            key={technology.id}
            className="card bg-base-100 border border-gray-200 shadow-sm p-5"
          >

            <div className="flex justify-between items-center">

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10"
              />

              <span
                className={`px-3 py-1 rounded-full text-xs ${getBadgeColor(
                  technology.badge
                )}`}
              >
                {technology.badge}
              </span>

            </div>

            <div className="mt-5">

              <h2 className="text-xl font-bold">
                {technology.name}
              </h2>

              <p className="text-gray-500 text-sm mt-3 min-h-[60px]">
                {technology.description}
              </p>

              <div className="flex items-center justify-between mt-5 text-sm">

                <span className="bg-gray-100 px-2 py-1 rounded">
                  {technology.category}
                </span>

                <span className="text-gray-500">
                  {technology.difficulty}
                </span>

                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {technology.rating}
                </span>

              </div>
            <button onClick={() => handleAddToStack(technology)}
             disabled={isAdded} className={`btn w-full mt-5 ${isAdded? "bg-gray-300 text-gray-500": "bg-slate-950 text-white"}`}
>                           {isAdded ? (<span className="flex items-center justify-center gap-2"><FaCheck />Added to Stack</span>) : ("Add to Stack")}
             </button>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default Technology;