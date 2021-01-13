import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About() {
  const linkClickHandler = () => {
	Router.push("/");
  }
  return<MainLayout title={"About Page | Next JS"}>
	<h1>About Page</h1>
  	<button onClick={()=>Router.push("/posts")}>Go to Posts</button>
  	<button onClick={linkClickHandler}>Go to Home</button>
  </MainLayout>
}