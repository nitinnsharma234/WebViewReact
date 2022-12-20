import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [sum, setSum] = useState(0);
  useEffect(()=>{
    if (window) {
      console.log('window created')
      window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
        // const args = [1, true, ['bar', 5], {foo: 'baz'}];
        console.log('handler created')
        //@ts-ignore
        window.flutter_inappwebview.callHandler('myHandlerName', 'Rahul')
      })
    }
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script type='javascript'>
          

        </script>
      </Head>

      <main className={styles.main}>
        <button
        id='mybutton'
        onClick={()=>{
          console.log("hello")
          window.parent.postMessage('any message', "*");

          // window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
          //   const args = [1, true, ['bar', 5], {foo: 'baz'}];
          //   window.flutter_inappwebview.callHandler('myHandlerName', ...args);
          // });
          // window.add
          //@ts-ignore
          window.test= (a, b) => {
            setSum(a+b)
          }
          //@ts-ignore
          if (window.flutter_inappwebview) {
            //@ts-ignore
            window.flutter_inappwebview.callHandler('myHandlerName', 'Rahul 123')
          }
        }}
        >Click Me!! {sum}</button>
       </main>
    </div>
  )
}
