import { useState } from 'react'


/**
 * Input component
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
export default function Input({label, name, type, required = false, value, setValue, className}) {

  const [isFocused, setIsFocused] = useState(false)

  return (
    <div 
      className={`
        input-wrapper
        duration-300
        inline-block
        relative
        w-full
        ${type == "hidden" && 'hidden'}
        ${className}
      `}
    > 
      <label 
        htmlFor={`input_${name}`}
        className={`
          absolute
          top-1/2
          left-4
          -translate-y-1/2
          duration-300
          ${(isFocused || value != '') && '-translate-y-7'}
          ${(isFocused || value != '') && 'scale-75'}
        `}
      >
        {label} {required && <span>*</span>}
      </label>

      <input 
        type={type}
        name={name}
        id={`input_${name}`}
        required={required}
        className={`
          bg-grey
          rounded-xl
          px-8
          pt-5
          pb-2
          duration-300
          outline-none
          focus:bg-orange-light
          text-lg
          w-full
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}