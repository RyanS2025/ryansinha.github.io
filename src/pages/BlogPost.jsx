import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-amber-400 mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/blog" className="text-sm text-gray-400 mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div className="text-gray-300 leading-relaxed">{post.body}</div>
    </article>
  );
}