import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../shared/services/api";
import { GitUserCard } from "./components/GitUserCard";

//https://api.github.com/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge

export interface Post {
  id: number;
  html_url: string;
  title: string;
  created_at: string;
  body: string;
  number: number;
  comments: number;
  user: {
    login: string;
  };
}

interface PostResponse {
  items: Post[];
}

const formatBody = (body: string) => body.replaceAll("*", "").split("\n")[0];
const FAKE_POSTS_MULTIPLICATION = 10;

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  const searchPosts = async () => {
    const fixedRepository = `repo:rocketseat-education/reactjs-github-blog-challenge`;
    const searchParam = search ? search + " " : "";
    const response = await api.get<PostResponse>("/search/issues", {
      params: {
        q: searchParam + fixedRepository,
      },
    });

    const fakePosts = [...Array(FAKE_POSTS_MULTIPLICATION).keys()].reduce(
      (acc, index, reduceIndex) => [
        ...acc,
        ...response.data.items.map((item) => ({
          ...item,
          id: index + reduceIndex * response.data.items.length,
        })),
      ],
      response.data.items
    );

    setPosts(fakePosts);
  };

  useEffect(() => {
    searchPosts();
  }, []);

  return (
    <main className="pb-10">
      <GitUserCard />

      <div className="mt-12 mb-12 flex gap-4 flex-col">
        <div className="flex justify-between">
          <span className="text-ig-subtitle font-bold">Publicações</span>

          <span>{posts.length} publicações</span>
        </div>

        <input
          type="text"
          className="bg-ig-input border-ig-border placeholder:text-ig-label py-3 px-4 rounded-md border-[1px]"
          placeholder="Buscar conteúdo"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex w-full flex-col bg-ig-post rounded-lg p-8 gap-y-5 cursor-pointer | transition-all hover:translate-y-[-0.25rem] hover:translate-x-[0.1rem] hover:shadow-2xl hover:brightness-110"
            onClick={() => navigate(`/post/${post.number}`)}
          >
            <div className="flex w-full justify-between gap-x-4">
              <h3 className="text-ig-title text-xl">{post.title}</h3>

              <span>
                <time
                  dateTime={post.created_at}
                  title={new Date(post.created_at).toLocaleDateString("pt-BR")}
                  className="text-sm text-ig-span whitespace-nowrap"
                >
                  Há 1h
                </time>
              </span>
            </div>

            <p className="text-ig-text leading-[160%] line-clamp-4 text-ellipsis">
              {formatBody(post.body)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
