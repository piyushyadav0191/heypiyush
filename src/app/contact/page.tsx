import Contact from '@/components/Contact'
import PageTitle from '@/components/page-title'

export const runtime = 'edge'
export const title = 'Contact'
export const description = 'A student who loves web development.'

const ContactPage = () => {
  return (
    <>
      <PageTitle
        title='Contact'
        description='😊 I love it when you want to contact me'
      />
      <Contact />
    </>
  )
}

export default ContactPage
