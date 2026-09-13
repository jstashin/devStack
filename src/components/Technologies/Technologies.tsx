import { use, useState } from "react";
import Technology from "./Technology";
import YourStack from "../YourStack";

const Technologies = ({ technologiesPromise }) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert("This technology is already added!");
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id) => {
    const remaining = stack.filter(
      (item) => item.id !== id
    );

    setStack(remaining);
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="container mx-auto px-10">

      <h1 className="text-3xl font-bold">
        Explore the{" "}
        <span className="text-pink-700">
          Technologies
        </span>
      </h1>

      <p className="text-gray-500 pb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">

        <div className="w-full lg:w-3/4">
          <Technology
            technologies={technologies}
            stack={stack}
            handleAddToStack={handleAddToStack}
          />
        </div>

        <div className="w-full lg:w-1/4">
          <YourStack
            stack={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>

      </div>

    </div>
  );
};

export default Technologies;