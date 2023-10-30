'use client'

import Image from '@/components/mdx/image'
import { HERO_LINKS } from '@/config/links'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='space-y-6 md:my-16'>
      <div className='flex flex-col-reverse gap-8 md:flex-row md:justify-between'>
        <div className='space-y-4 md:max-w-lg'>
          <div className='flex flex-row items-center space-x-2'>
            <Image
              src={'/images/logo.png'}
              width={55}
              height={55}
              alt='Piyush'
            />
            <h1 className='text-2xl font-bold text-foreground sm:text-4xl'>
              Piyush Yadav
            </h1>
          </div>
          <h2 className='font-medium text-muted-foreground sm:text-lg'>
            Student • Full-stack Developer
          </h2>
          <p className='sm:text-lg'>
            I am a student and a Passionate and creative Full Stack developer
            based in{' '}
            <Link
              href={
                'https://www.google.com/maps/place/India/@21.0686228,82.7525294,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu'
              }
              className='text-blue-600'
            >
              India{' '}
            </Link>{' '}
            🇮🇳
          </p>
        </div>
        <div className='h-15 w-15 relative md:h-64 md:w-64'>
          <Image
            src='/images/profile.jpg'
            className='rounded-full'
            width={140}
            height={142}
            alt='Piyush'
            loading='eager'
            priority
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-0 blur-2xl md:opacity-50' />
        </div>
      </div>
      <div className='flex gap-6'>
        {HERO_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.label}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Hero
