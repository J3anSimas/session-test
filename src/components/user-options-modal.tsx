import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { signOut } from 'next-auth/react'
export default function UserOptionModal(): JSX.Element {
  function handleLogout() {
    signOut({callbackUrl: '/auth/signin'})
  }
  return (
    <DropdownMenu.Portal className="bg-blue-500">
      <DropdownMenu.Content className="mt-1 translate-x-[-25%]  text-gray-100">
        <div className="  flex w-40 flex-col rounded-md bg-blue-500">
          <DropdownMenu.Item>
            <button
              className="flex w-full justify-start py-1 pl-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </DropdownMenu.Item>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
