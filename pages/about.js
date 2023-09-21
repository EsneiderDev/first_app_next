import Head from "next/head";
import Image from 'next/image';
// import { useEffect } from "react";

function  About({result}) { 
    
    // useEffect(()=>{
    //     alert('about');
    // },[])

    return (
        <div>
            <Head>
                <title>ABOUT</title>
                <meta name="descripcion" content="Mu firt app with Next.Js"></meta>
            </Head>
            {JSON.stringify(result)}
            <h1>About</h1>
            <Image src="/bg.jpg" alt='' width="2000" height="200" layout="responsive"/>
            <p>This is the about pague</p>
            <button onClick={()=>alert('¡HOLA MUNDO!')}>
            Clic
            </button>
        </div>
    );

}

export async function getStaticProps(context){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'});
    let result = await response.json();
    console.log(result);
    return {
        props: {
            result
        }
    }
}

export default About;