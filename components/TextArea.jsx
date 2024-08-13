/**
 * TextArea component
 * 
 * @param {object} props - component props
 * @param {string} props.label - input label
 * @param {string} props.name - input name
 * @param {string} props.type - input type
 * @param {boolean} props.required - input required
 * @param {string} props.value - input value
 * @param {function} props.setValue - input value setter
 * @param {string} props.className - input class name
 * @returns {JSX.Element} Input component
 */
export default function TextArea({label, name, type, required = false, value, setValue, placeholder, className}) {

  return (
    <div 
      className={`
        input-wrapper
        duration-300
        inline-block
        w-full
        ${type == "hidden" && 'hidden'}
        ${className}
      `}
    > 
      <label 
        htmlFor={`input_${name}`}
        className={`
          text-left
          block
          my-2
          font-bold
          ml-4
        `}
      >
        {label} {required && <span>*</span>}
      </label>

      <textarea 
        type={type}
        name={name}
        id={`input_${name}`}
        required={required}
        className={`
          bg-grey
          rounded-xl
          px-8
          py-4
          duration-300
          outline-none
          focus:bg-orange-light
          text-lg
          w-full
          focus:ring-4
          focus:ring-purple
          focus:opacity-80
          h-36
        `}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}