import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>New Balance</title>
            </Head>
            <header>
                {/* Add header content here */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Add footer content here */}
            </footer>
        </>
    );
};

export default Layout;
