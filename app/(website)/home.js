
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import AboutSection from "@/components/aboutme";  // Updated import path

const LineBreak = () => {
  return (
    <span className="hidden md:inline"><br /></span>
  );
};

export default function Post({ posts }) {
  return (
    <>
      <AboutSection />
      {posts && (
        <Container>
          <div className="mb-8" style={{ width: '100%'}}>
          <h1 className="text-3xl font-serif font-semibold mb-8" style={{ margin: '0' }}>
            Portfolio projects
          </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="grid gap-10 col-span-2">
            {posts.slice(0, 1).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 5).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-16 mb-8" style={{ width: '100%'}}>
          <h1 className="text-3xl font-serif font-semibold mb-8" style={{ margin: '0' }}>
            Blog and my thoughts
          </h1>
          </div>
          <div className="grid mt-10 gap-10 md:grid-cols-1 lg:gap-10 ">
            {posts.slice(1, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(7, 10).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
