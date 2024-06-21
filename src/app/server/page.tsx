import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

const page = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div>
    <div>{session?.user.firstName}</div>
    <div>{session?.user.lastName}</div>
    <div>{session?.user.role}</div>
</div>
  )
}

export default page