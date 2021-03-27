import '../../styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import { LayoutBase } from "../layouts/LayoutBase/LayoutBase";
import 'semantic-ui-css/semantic.min.css'

function MyApp({Component, pageProps, router}) {
    const Layout = Component.Layout || LayoutBase;
    return (
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp
