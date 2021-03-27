import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {Button} from "semantic-ui-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <body>
            <Button>Click Here</Button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nam?
        </body>
      </Head>
    </div>
  )
}
