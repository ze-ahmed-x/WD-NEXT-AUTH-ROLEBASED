'use client'
import React from 'react'

import { useSession } from 'next-auth/react'
const Client = () => {
    const { data: session } = useSession()
    return (
        <div>
            <div>{session?.user.firstName}</div>
            <div>{session?.user.lastName}</div>
            <div>{session?.user.role}</div>
        </div>
    )
}

export default Client