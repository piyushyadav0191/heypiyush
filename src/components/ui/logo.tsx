import Image from 'next/image'
import React from 'react'

const Logo = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
    <>
    <Image src={"/images/logo.png"} width={35} height={35} alt='piyush' />
    </>
    )
  }
)

Logo.displayName = 'Logo'

export { Logo }
