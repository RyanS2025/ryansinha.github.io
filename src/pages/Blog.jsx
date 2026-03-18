import posts from "../data/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Posts</h1>
        <p className="text-gray-400 mb-8">Updates on what I'm working on.</p>
        <div className="flex gap-2 mb-6 flex-wrap">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="block border border-white/5 rounded-xl p-5 mb-4 hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg">{post.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">{post.excerpt}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4"> {post.date} </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}