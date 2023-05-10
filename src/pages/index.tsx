import PageLayout from '@/components/PageLayout'
import { type GetStaticProps } from 'next'

const Home = ({ navigation = {} }) => {
  console.log(navigation)

  return <PageLayout>Hola</PageLayout>
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigation`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  )

  const {
    data: {
      attributes: { schema }
    }
  } = await res.json()

  return {
    props: {
      navigation: schema
    }
  }
}
