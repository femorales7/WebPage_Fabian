import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:bg-dark dark:border-light sm:text-base'
    >
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <span >{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
          <div className='flex items-center lg:py-2'>
          <span className='text-blue-400 text-2xl px-1'>&#9768;</span>
          by&nbsp;<Link href="/" className='underline
          underline-offset-2'>Fabian Morales</Link>
          </div>
          
          <Link href="/about">About me</Link>
      </Layout>
    </footer>
    
  )
}

export default Footer