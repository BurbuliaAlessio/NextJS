import Link from "next/link"
import { JSX } from "react"
import ChangeLanguage from '../changeLanguage/index';

export const Navbar = (): JSX.Element => {
    return (
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/post">Post</Link>
                    </li>
                </ul>
                <ChangeLanguage />
            </nav>
    )
}