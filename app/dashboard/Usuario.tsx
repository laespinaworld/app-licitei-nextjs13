import { Menu, Transition } from '@headlessui/react'
import {
  UserCircleIcon,
  ArrowSmallDownIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  PencilSquareIcon,
  CircleStackIcon,
  ArrowDownOnSquareStackIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from 'react'

function Usuario() {
  return (
    <div className='hidden md:inline'>
        <div className="flex items-center   space-x-2">
        <UserIcon className="h-6 w-6 bg-neutras-white p-1 rounded-full  text-light" />
        <h1 className=" font-semibold text-white">Olá, user</h1>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="items-center">
              <ChevronDownIcon className="h-6 w-6 text-[#FF884B] cursor-pointer" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bg-green-400 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-neutras-white shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#0B5B75] text-neutras-white" : "text-[#0B5B75]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilSquareIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilSquareIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Editar perfil
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#0B5B75] text-neutras-white" : "text-[#0B5B75]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ArrowDownOnSquareStackIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownOnSquareStackIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Meus dados
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#0B5B75] text-neutras-white" : "text-[#0B5B75]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <AdjustmentsHorizontalIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <AdjustmentsHorizontalIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Configurações
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#0B5B75] text-neutras-white" : "text-[#0B5B75]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ChatBubbleBottomCenterIcon
                          className="mr-2 h-5 w-5  text-neutras-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChatBubbleBottomCenterIcon
                          className="mr-2 h-5 w-5 text-[#0B5B75]"
                          aria-hidden="true"
                        />
                      )}
                      Suporte
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 cursor-pointer py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                    
                      className={`${
                        active ? "bg-[#0B5B75] text-neutras-white" : "text-[#0B5B75]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <ArrowRightOnRectangleIcon
                          className="mr-2 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowRightOnRectangleIcon
                          className="mr-2 h-5 w-5 text-[#0B5B75]"
                          aria-hidden="true"
                        />
                      )}
                      Sair
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
         </div>
    </div>
  )
}

export default Usuario