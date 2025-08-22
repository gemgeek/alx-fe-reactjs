import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // dynamic parameter from the URL
  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}