export default function MyInput({ title, type, name, value = "", onChange, required = false }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        autoComplete="off"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded p-2 w-full"
      />
    </div>
  );
}
