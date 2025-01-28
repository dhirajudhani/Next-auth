"use client"

import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const Appbar = () => {

  return (
    <div>
        <button onClick={() => {
            signIn()
        }}>Sign in</button>
         <button onClick={() => {
            signOut()
        }}>Sign out</button>
    </div>
  )
}

export default Appbar