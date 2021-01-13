import Head from "next/head";
import {MainLayout} from "../components/MainLayout";


export default function Posts() {
  return(
  <MainLayout title={"Posts Page | Next JS"}>
	<h1>Posts Page</h1>
  </MainLayout>
  )
}