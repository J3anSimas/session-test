import { PaperPlaneTilt } from 'phosphor-react'
import Header from '../components/header'

export default function Atendimento(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 w-screen max-w-[1120px] items-center h-full max-h-[calc(100vh-6rem)] py-4 px-1">
        <div className="flex gap-6 h-full max-h-full w-full">
          <aside className="flex flex-col bg-gray-500 p-4 flex-1 h-full gap-8 rounded-md">
            <h1 className="text-2xl text-white font-bold">Atendimento</h1>
            <ul className="flex flex-col gap-2 max-h-full overflow-auto pr-2">
              <li className="bg-gray-900 p-3 rounded-md flex flex-col gap-3">
                <h2 className="text-gray-100 font-bold">Jean Simas</h2>
                <span className="font-light text-blue-500">Em atendimento</span>
              </li>
              <button className="bg-gray-900 p-3 rounded-md flex flex-col gap-3">
                <h2 className="text-gray-100 font-bold">Jean Simas</h2>
                <span className="font-bold text-red-500">
                  Esperando atendimento
                </span>
              </button>
            </ul>
          </aside>
          <main className="  w-full h-full max-h-full flex-[2] flex flex-col gap-2 rounded-md">
            <span className="flex bg-gray-500 rounded-md gap-4 w-full justify-between items-center p-4 pl-6">
              <span className="text-gray-100 font-bold text-xl">
                Jean Simas
              </span>
              <div className="flex gap-2">
                <button className="bg-red-500 rounded-md py-4 px-5 text-lg font-bold text-white">
                  Abrir Chamado
                </button>
                <button className="bg-blue-500 rounded-md py-4 px-5 text-lg font-bold text-white">
                  Finalizar
                </button>
              </div>
            </span>
            <div className="bg-gray-500 p-4 flex flex-col rounded-md gap-2 overflow-y-auto max-h-full h-full pr-3">
              <span className="bg-gray-100 max-w-xs p-2 rounded-xl rounded-tl-none flex flex-col gap-2 ">
                <p className="text-md">
                  Essa é uma mensagem ora testar como um texto se comporta
                </p>
                <span className="text-sm flex justify-end">13:21</span>
              </span>
              <span className="bg-blue-300 max-w-xs p-2 rounded-xl rounded-tr-none flex flex-col gap-2 ml-auto">
                <p className="text-md">
                  Essa é uma mensagem ora testar como um texto se comporta
                </p>
                <span className="text-sm flex justify-end">13:21</span>
              </span>
            </div>

            <div className="flex justify-between mt-auto bg-gray-500 rounded-md  gap-2 w-full ">
              <input
                className="bg-gray-500 text-gray-100 h-12 pl-4 rounded-md w-[100%] outline-none "
                type="text"
                placeholder="Digite sua mensagem"
              />
              <button className="h-[50px] w-[50px] border-red-500 flex justify-center items-center">
                <PaperPlaneTilt
                  size={24}
                  weight="bold"
                  className="text-blue-500"
                />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
