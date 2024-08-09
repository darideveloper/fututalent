import { useState, useEffect } from 'react'
import { fontTitle } from '@/libs/fonts'

import Input from '@/components/Input'
import Title from '@/components/Title'


export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [formReady, setFormReady] = useState(false)

  const inputsData = [
    {
      "label": "Nombre",
      "name": "name",
      "type": "text",
      "required": true,
      "value": name,
      "setValue": setName
    },
    {
      "label": "Email",
      "name": "email",
      "type": "email",
      "required": true,
      "value": email,
      "setValue": setEmail
    },
    {
      "label": "Teléfono",
      "name": "phone",
      "type": "tel",
      "value": phone,
      "setValue": setPhone
    },
    {
      "label": "Empresa",
      "name": "company",
      "type": "text",
      "value": company,
      "setValue": setCompany
    },
    {
      "label": "Mensaje",
      "name": "message",
      "type": "text",
      "required": true,
      "value": message,
      "setValue": setMessage
    },
  ]

  useEffect(() => {
    // Update submit button state when all required inputs are filled    
    const requiredInputs = inputsData.filter(inputData => inputData.required)
    const allRequiredInputsFilled = requiredInputs.every(inputData => inputData.value)
    setFormReady(allRequiredInputsFilled)
  }, [name, email, phone, company, message])

  return (
    <section
      className={`
        contact
        bg-purple-light
        px-4
        py-8
        text-center
      `}
      id='contact'
    >

      <Title>
        Hablemos de futuro
      </Title>

      <p>
        Contacta con nosotros para más información
      </p>

      <form
        action='.'
        method='POST'
        className={`
          container
          mx-auto
          max-w-3xl
          py-8
        `}
      >

        <div
          className={`
            grid-inputs
            grid
            grid-cols-1 md:grid-cols-2
            w-full
            gap-4
          `}
        >
          {/* Generate grid inputs */}
          {
            inputsData.slice(0, 4).map((inputData, index) => (
              <Input
                key={index}
                label={inputData.label}
                name={inputData.name}
                type={inputData.type}
                required={inputData.required}
                value={inputData.value}
                setValue={inputData.setValue}
              />
            ))
          }
        </div>

        <Input
          label={inputsData[4].label}
          name={inputsData[4].name}
          type={inputsData[4].type}
          required={inputsData[4].required}
          value={inputsData[4].value}
          setValue={inputsData[4].setValue}
          className={`
            my-4
          `}
        />

        <button
          className={`
            btn-submit
            text-2xl
            font-bold
            ${fontTitle.className}
            text-white
            bg-purple
            px-16
            py-2
            rounded-md
            disabled:opacity-50
            duration-300
          `}
          disabled={!formReady}
        >
          Enviar
        </button>
      </form>

    </section>

  )
}