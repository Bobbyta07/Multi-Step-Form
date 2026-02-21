function Input(props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-sm text-gray-500 font-Ubuntu">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}

export default Input;
