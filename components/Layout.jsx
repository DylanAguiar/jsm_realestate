import Head from 'next/head';
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
    <Head>
        <title>Real Estate</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZT5JFVKMHT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZT5JFVKMHT');
</script>
    </Head>
    <Box maxWidth="1280px" m="auto">
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </Box>
    </>
);

export default Layout;
