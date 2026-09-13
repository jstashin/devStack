import { use, useState } from "react";
import Technology from "./Technology";
import YourStack from "../YourStack";
import { toast, ToastContainer } from "react-toastify";
import type { TechnologyType } from "../../types/technology";

type TechnologiesProps = {
  technologiesPromise: Promise<TechnologyType[]>;
};

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<TechnologyType[]>([]);

  const handleAddToStack = (technology: TechnologyType) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already added!");
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    const remaining = stack.filter(
      (item) => item.id !== id
    );

    setStack(remaining);

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from stack!`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed!");
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

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Technologies;