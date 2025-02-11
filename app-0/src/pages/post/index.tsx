import { Layout } from "@/components/layout/Layout";
import { JSX } from "react";

const Post = (): JSX.Element => {

    return (
            <main>
                    <p className="text-2xl">this the page posts</p>
            </main>
    )
}

Post.getLayout = function getLayout(page: JSX.Element) {
    return (
            <Layout>
                    {page}
            </Layout>
    )
}

export default Post;