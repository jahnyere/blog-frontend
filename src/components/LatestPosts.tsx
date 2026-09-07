import { Link } from 'react-router-dom'

const posts = [
  {
    category: "Career",
    title: "How to build a Career in Tech Without Getting Overwhelmed",
    slug:"how-to-build-a-career-in-tech-without-getting-overwhelmed",
    excerpt:"A practical guide to choosing a tech path, building useful skills, and making steady progress without trying to learn everything at once.",
    author:"Jahnyere Ike",
    date:"Sept 4, 2026.",
  },

  {
    category: "AI",
    title: "5 AI Tools every Student and Professional should Know",
    slug:"5 ai-tools-every-student-and-professional-should-know",
    excerpt:"Discover Practical AI Tools that can help you write faster, stay organized and improve your daiy productivity.",
    author:"Jahnyere Ike",
    date:"Sept 3, 2026.",
  },


  {
    category: "Tech",
    title: "What I Wish I Knew Before Learning React",
    slug:"what-i-wish-before-learning-react",
    excerpt:"Lessons from learning React, common mistakes to avoid, and how to build projects that actually help you grow as a developer",
    author:"Jahnyere Ike",
    date:"Sept 1, 2026.",

  }


]



function LatestPosts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (

          <Link to={`/posts/${post.slug}`} key={post.title}>
          <article className="rounded-xl border border-gray-200 bg-white p-6 ">

            <p className="text-sm font-medium text-gray-500">{post.category}</p>

            <h3 className="mt-3 text-xl font-bold text-gray-900">
              {post.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>

          </article>
          </Link>
        ))}

      </div>
    </section>
  )
}




export default LatestPosts;
