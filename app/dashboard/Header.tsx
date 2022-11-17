'use client'
import Image from 'next/image'
import React from 'react'
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
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Usuario from './Usuario';
function Header() {
  return (
    <div>
      <header className='p-5 bg-primary flex items-center justify-between top-0'>
        <div className='relative  w-20 h-10'>
        <Image
        alt='logo'
        src='/logo.svg'
        layout='fill'
        objectFit='contain'/>
        </div>
        
        <Usuario/>
    </header>

    </div>
    
  )
}

export default Header