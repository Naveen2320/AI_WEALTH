import { SignUp } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
  return (
    <SignUp fallbackRedirectUrl="/dashboard"  />
  )
};

export default Page;