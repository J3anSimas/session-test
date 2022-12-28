import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import UserOptionModal from './user-options-modal'
export default function Header(): JSX.Element {
  return (
    <header className="flex w-full justify-center bg-gray-100 py-2">
      <div className="flex w-full max-w-[1120px]  items-center justify-between px-1">
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            <Link href="/atendimento">Atendimento Online</Link>
            <Link href="/chamados">Chamados</Link>
          </nav>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="" asChild>
              <button className="h-16 w-16 rounded-full bg-gray-900"></button>
            </DropdownMenu.Trigger>
            <UserOptionModal />
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  )
}
