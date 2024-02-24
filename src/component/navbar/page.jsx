import image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

export default function Navbar(){
    return(
        <div className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>

        </div>
    )
}