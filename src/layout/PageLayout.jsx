import React from 'react'

export default function PageLayout({children,id='',className=""}) {
  return (
    <section id={id} className={`${className} sm:min-h-screen mb-10`}>
{children}
    </section>
  )
}
