import { FaXmark } from "react-icons/fa6";

const YourStack = ({
  stack,
  handleRemove,
  handleRemoveAll
}) => {

  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">

      <h1 className="font-black text-2xl">
        Your Stack
      </h1>

      <p className="text-gray-400 mt-1">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (

        <div className="border-2 border-dashed border-gray-200 rounded-xl h-32 mt-6 flex items-center justify-center">

          <p className="text-gray-400 text-center">
            Your stack is empty.
          </p>

        </div>

      ) : (

        <>
          <div className="mt-6 space-y-3">

            {stack.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-9 h-9"
                  />

                  <div>

                    <h3 className="font-semibold text-sm">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {item.category}
                    </p>

                  </div>

                </div>
         <button
  onClick={() => handleRemove(item.id)}
  className="text-gray-400 hover:text-red-500"
>
  <FaXmark />
</button>

              </div>

            ))}

          </div>

          <button
            onClick={handleRemoveAll}
            className="btn btn-outline btn-error w-full mt-6"
          >
            Remove All
          </button>

        </>

      )}

    </div>
  );
};

export default YourStack;