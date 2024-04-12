import Contact from '@/components/Contact'
import PageTitle from '@/components/page-title'
import type {Metadata} from "next"

export const runtime = 'edge'
export const title = 'Contact'
export const description = 'A student who loves web development.'

export const metadata: Metadata = {
  title: "Contact - Piyush Yadav",
    description:
    "Piyush Yadav is a full-stack developer in India. He is creative and passionate about design and technology so he always try to craft great-looking software products.",
};

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
