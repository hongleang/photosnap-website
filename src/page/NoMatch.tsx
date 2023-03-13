import React from 'react'
import { Link } from "react-router-dom"

export default function NoMatch() {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-end text-center px-4 mb-20">
        <h1 className="text-4xl tracking-normal">Opps.. something worng!</h1>
        <p className="text-base">Sorry, the Page that you're looking for is not found</p>
        <Link className="underline" to="/">Go back to homepage</Link>
    </div>
  )
}
