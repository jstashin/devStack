const YourStack = () => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
      
      <h1 className="font-black text-2xl">
        Your Stack
      </h1>

      <p className="text-gray-400 mt-1">
        No technologies selected yet.
      </p>

      <div className="border-2 border-dashed border-gray-200 rounded-xl h-32 mt-6 flex items-center justify-center">
        <p className="text-gray-400">
          Your stack is empty.
        </p>
      </div>

    </div>
  );
};

export default YourStack;