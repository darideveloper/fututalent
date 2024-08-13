import { useState, useEffect } from 'react'
import { fontTitle } from '@/libs/fonts'
import { fromCredentials, formHost } from '@/libs/form'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Title from '@/components/Title'


export default function Contact() {

  // Pages states
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')

  // Input states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [formReady, setFormReady] = useState(false)
  const [inputUser, setInputUser] = useState(fromCredentials.user)
  const [inputApiKey, setInputApiKey] = useState(fromCredentials.apiKey)
  const [inputRedirect, setInputRedirect] = useState("")

  const inputsData = [
    {
      "label": "Nombre",
      "name": "name",
      "type": "text",
      "required": true,
      "value": name,
      "setValue": setName,
      "placeholder": "Juan Pérez"
    },
    {
      "label": "Email",
      "name": "email",
      "type": "email",
      "required": true,
      "value": email,
      "setValue": setEmail,
      "placeholder": "ejemplo@gmail.com"
    },
    {
      "label": "Teléfono",
      "name": "phone",
      "type": "tel",
      "value": phone,
      "setValue": setPhone,
      "placeholder": "55 1234 5678"
    },
    {
      "label": "Empresa",
      "name": "company",
      "type": "text",
      "value": company,
      "setValue": setCompany,
      "placeholder": "Empresa S.A. de C.V."
    },
    {
      "label": "Mensaje",
      "name": "message",
      "type": "text",
      "required": true,
      "value": message,
      "setValue": setMessage,
      "placeholder": "Escribe tu mensaje"
    },
    {
      "label": "user",
      "name": "user",
      "type": "hidden",
      "value": inputUser,
      "setValue": setInputUser
    },
    {
      "label": "api_key",
      "name": "api_key",
      "type": "hidden",
      "value": inputApiKey,
      "setValue": setInputApiKey
    },
    {
      "label": "redirect",
      "name": "redirect",
      "type": "hidden",
      "value": inputRedirect,
      "setValue": setInputRedirect
    }
  ]

  useEffect(() => {
    // Update submit button state when all required inputs are filled    
    const requiredInputs = inputsData.filter(inputData => inputData.required)
    const allRequiredInputsFilled = requiredInputs.every(inputData => inputData.value)
    setFormReady(allRequiredInputsFilled)
  }, [name, email, phone, company, message])

  // Show alert in thanks page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPage(window.location.href)
      if (window.location.href.includes('thanks=true')) {
        Swal.fire({
          title: 'Gracias por contactarnos',
          text: 'En breve nos pondremos en contacto contigo',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        
        // Redirect to home after click in "ok"
        .then((res) => {
          if (res.isConfirmed) {
            // Get url without thanks poram
            const initialUrl = currentPage.split('?')[0]
            window.location.href = initialUrl
          }
        })
      }
    }
  }, [router])

  // Update redirect page
  useEffect(() => {
    setInputRedirect(`${currentPage}?thanks=true`)
  }, [currentPage])

  return (
    <section
      className={`
        contact
        bg-purple-light
        px-4
        py-24
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
        action={formHost}
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
            grid-cols-1 sm:grid-cols-2
            w-full
            gap-6
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
                placeholder={inputData.placeholder}
              />
            ))
          }
        </div>

        <TextArea
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

        {/* render hidden inputs */}
        {
            inputsData.slice(5, 8).map((inputData, index) => (
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
            mt-6
          `}
          disabled={!formReady}
        >
          Enviar
        </button>
      </form>

    </section>

  )
}