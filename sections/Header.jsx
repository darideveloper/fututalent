import Image from 'next/image'
import Link from 'next/link'

import { menuItems } from '@/libs/nav'
import { fontTitle } from '@/libs/fonts'
import { useState } from 'react'


export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={`
        header
        bg-transparent
        w-full
        max-w-7xl
        container
        mx-auto
        flex
        items-center
        justify-between
        py-2
      `}
    >
      <Image 
        src="/images/logo.webp"
        alt="Fututalent logo"
        width={200}
        height={200}
      />

      <button
        className={`
          menu-btn
          bg-orange
          p-3
          rounded-xl
          lg:hidden
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          viewBox="0 0 24 24"
          className={`
            fill-purple
            w-12
            h-12
          `}
        >
          {/* CHange svg path */}
          <path 
            d={
              isOpen 
              ? 
              "m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z"
              : 
              "m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-4 11.25c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.248c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.252c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75z"
            }
          />  
        </svg>
      </button>

      

      <nav
        className={`
          fixed lg:static
          top-0
          ${isOpen ? 'left-0' : '-left-96'}
          w-72 lg:w-auto
          h-screen lg:h-auto
          bg-purple lg:bg-transparent
          z-30
          flex
          items-start
          justify-center
          duration-700
        `}
      >
        <ul
          className={`
            ${fontTitle.className}
            mt-16 lg:mt-0
            flex
            flex-col lg:flex-row
          `}
        >
          {
            menuItems.map((item, index) => (
              <li 
                key={index}
              >
                <Link
                  href={item.link}
                  className={`
                    text-md
                    capitalize
                    text-center
                    block
                    py-6
                    px-2
                    lg:mx-2
                    text-white lg:text-purple-dark
                    duration-300
                    hover:opacity-50
                    lg:hover:text-orange
                  `}
                >
                  {item.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

    </header>
  )
}