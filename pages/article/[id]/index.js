import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'
const article = ({ article }) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <>
            <Meta title={article.title} />
            <h3>{article.title} </h3>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return{
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => (
        {
            params: {
                id: id.toString()
            }
        }
    ))

    return {
        paths,
        fallback: false
    }


}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return{
//         props: {
//             article
//         }
//     }
// }

export default article
