import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:bg-dark dark:border-light'
    >
      <Layout className='py-8 flex items-center justify-between'>
          <span >{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
          <div className='flex items-center'>
          <span className='text-primary text-2xl px-1'>&#9768;</span>
          by&nbsp;<Link href="/" className='underline
          underline-offset-2'>Fabian Morales</Link>
          </div>
          
          <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
    
  )
}

export default Footer