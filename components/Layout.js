import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <Meta />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header></Header>
                {children}
            </main>
            
        </div>
        </>
    )
}

export default Layout
