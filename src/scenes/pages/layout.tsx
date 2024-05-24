
import React, { Fragment } from 'react'
import { Navbar } from '../../components/navbar'

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <Fragment>
        <Navbar />
          {children}
    </Fragment>
  )
}

export default Layout