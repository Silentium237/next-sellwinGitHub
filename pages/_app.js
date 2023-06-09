import '../styles/global.css'
// import { Montserrat} from "@next/font/google";
//
// const roboto = Montserrat({
//     weight: '400',
//     subsets: ['latin'],
// });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <Component {...pageProps} />
            <style jsx global >
                {`
                body {
                font-family: 'Montserrat' , sans-serif;
                }`}
            </style>
        </>

        )

}
