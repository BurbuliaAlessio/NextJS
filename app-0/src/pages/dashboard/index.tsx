import { Layout } from '@/components/layout/Layout';
import { JSX } from 'react';
const Dashboard = (): JSX.Element => {
    return (
            <main>
                    <p>This is a private page</p>
                    <p>Dashboard</p>
            </main>
    )
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page: JSX.Element) {
    return (
            <Layout>
                    {page}
            </Layout>
    )
}