import { SignIn } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
  return (
    <SignIn fallbackRedirectUrl="/dashboard" />
  )
};

export default Page;