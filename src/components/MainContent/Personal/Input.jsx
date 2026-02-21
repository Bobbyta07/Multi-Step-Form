function Input(props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-sm text-gray-500 font-Ubuntu">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}

export default Input;
