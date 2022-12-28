import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import logoImage from '../../assets/logo.svg'
import { signIn } from 'next-auth/react'

export default function SignIn(): JSX.Element {
  const [credentials, setCredentials] = useState({username: '', password: ''})
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await signIn('credentials', { ...credentials, redirect: true, callbackUrl: '/'})
  }
  return (
    <div className="m-auto flex h-[90%] w-screen max-w-[1120px] rounded-md">
      <div className="flex flex-1 flex-col items-center justify-center rounded-l-md border-red-500 bg-gray-500 p-8">
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={e=>handleSubmit(e)}
        >
          <h1 className="flex justify-start text-3xl font-bold text-white">
            Bem vindo de volta
          </h1>
          <p className="text-md text-gray-100 ">
            Bem vindo de volta! Por favor entre com suas credenciais
          </p>
          <input
            className="rounded-md bg-gray-900 p-[0.593rem] text-md text-gray-100  outline-none placeholder:font-bold placeholder:text-gray-300"
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            placeholder="Entre com seu email"
          />
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className="rounded-md bg-gray-900 p-[0.593rem] text-md text-gray-100  outline-none placeholder:font-bold placeholder:text-gray-300"
            placeholder="Entre com sua senha"
          />

          <button className="rounded-md bg-blue-500 py-3 font-bold text-white hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-r-md bg-gray-100">
        <Image src={logoImage} width={440} height={175} alt="" />
      </div>
    </div>
  )
}
