'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import { logoTextVariants, navBarEndVariants } from './Header.animations'
import useHeader from './useHeader'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Props {
  variant?: 'default' | 'blog' | 'post'
}

const Header = ({ variant = 'default' }: Props) => {
  const router = useRouter()
  const { showHeaderBorder } = useHeader()

  const handleLogoClick = () => router.push('/')

  return (
    <>
      <header
        className={`z-10 navbar border-b transition-shadow bg-base-100 top-0 border-transparent px-4 md:px-8 sticky ${
          showHeaderBorder ? 'shadow-md border-gray-200 dark:border-zinc-700 dark:shadow-xl' : ''
        }`}
      >
        <div className="navbar-start">
          <button className="flex flex-row space-x-3 items-end px-2" onClick={handleLogoClick}>
            <Logo />
            <motion.span
              className="text-sm font-medium"
              variants={logoTextVariants}
              initial="hidden"
              animate="visible"
            >
              Adrian Apan
            </motion.span>
          </button>
        </div>

        <motion.div
          className="navbar-end hidden md:flex"
          variants={navBarEndVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="menu menu-horizontal items-center space-x-1.5">
            <Menu />
          </ul>
        </motion.div>
      </header>
    </>
  )
}

export default Header
