import { Layout } from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { JSX } from "react";

const PostDetail = (): JSX.Element => {
    const router = useRouter();
    const query = router.query;
    const { id } = query;

    return (
            <main>
                    <p>post id : {id}</p>
            </main>
    )
}

PostDetail.getLayout = function getLayout(page: JSX.Element) {
    return (
            <Layout>
                    {page}
            </Layout>
    )
}

export default PostDetail;