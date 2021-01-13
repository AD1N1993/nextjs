function MyApp({ Component, pageProps }) {
  return (<>
	<Component {...pageProps} />
	<style jsx global>{`
body{
font-family: 'Kaushan Script', cursive;
}
	`}

	</style>
  </>)
}
export default MyApp;