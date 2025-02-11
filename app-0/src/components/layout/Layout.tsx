import Link from "next/link";
import { FC, PropsWithChildren } from "react"
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar>
                </Navbar>
            </header>

            <main>{children}</main>

            <Footer>
            </Footer>
        </div>
    );
};