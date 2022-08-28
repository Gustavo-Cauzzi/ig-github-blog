import { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineComment } from "react-icons/ai";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { TitleCard } from "../../shared/components/TitleCard";
import { api } from "../../shared/services/api";
import { Post } from "../Main";
import { GoBackButton } from "./components/GoBackButton";

export const PostPage: React.FC = () => {
  const params = useParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);

  const searchPostData = async () => {
    if (!params.id) return;

    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${params.id}`
    );

    console.log("response.data: ", response.data);

    if (response.data) {
      setPost(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    searchPostData();
  }, []);

  return (
    <div>
      <TitleCard loading={loading}>
        {!post ? (
          <div className="flex justify-center items-center w-full">
            Post não encontrado
          </div>
        ) : (
          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full justify-between uppercase items-center text-xs">
              <GoBackButton />

              <a target="_blank" href={post.html_url} className="text-ig-brand">
                Ver no GitHub <FiExternalLink className="inline" />
              </a>
            </div>

            <div className="flex w-full flex-col gap-2">
              <h1 className="text-ig-title text-2xl font-bold">{post.title}</h1>

              <div className="gap-6 flex">
                <div className="items-center flex gap-2">
                  <FiGithub />
                  {post.user.login}
                </div>
                <div className="items-center flex gap-2">
                  <AiOutlineCalendar />
                  <time
                    dateTime={post.created_at}
                    title={new Date(post.created_at).toLocaleDateString(
                      "pt-BR"
                    )}
                  >
                    Há 1 dia
                  </time>
                </div>
                <div className="items-center flex gap-2">
                  <AiOutlineComment />
                  {post.comments} comentários
                </div>
              </div>
            </div>
          </div>
        )}
      </TitleCard>

      <div className="p-10 flex w-full justify-center flex-col gap-8 leading-8">
        {post && <ReactMarkdown>{post.body}</ReactMarkdown>}
      </div>

      <hr className="mt-6 mb-2 border-ig-label" />

      <div className="flex w-full justify-between items-center pt-3 pb-8">
        <GoBackButton />

        <span
          className="text-ig-brand cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Voltar ao topo
        </span>
      </div>
    </div>
  );
};
