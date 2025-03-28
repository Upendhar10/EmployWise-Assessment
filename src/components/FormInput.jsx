const FormInput = ({ icon, type, value, placeholder, onChange }) => {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-gray-300 px-2 py-1">
      <div className="text-3xl">{icon}</div>
      <div className="h-1/2 w-0.5 bg-slate-400"></div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full border-none text-black outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
