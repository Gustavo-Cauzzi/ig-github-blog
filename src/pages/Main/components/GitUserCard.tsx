import { useState, useEffect, memo } from "react";
import { TitleCard } from "../../../shared/components/TitleCard";
import { api } from "../../../shared/services/api";
import { GIT_USER } from "../../../shared/utils/AppConstants";

import { FiExternalLink, FiGithub, FiUsers } from "react-icons/fi";
import { BiBuilding } from "react-icons/bi";

interface GitUser {
  id: number;
  login: string;
  company: string;
  avatar_url: string;
  name: string;
  followers: string;
  bio: string;
}

export const GitUserCard: React.FC = memo(() => {
  const [gitUser, setGitUser] = useState<GitUser>();

  const searchGitUser = async () => {
    const response = await api.get<GitUser>(`/users/${GIT_USER}`);
    setGitUser(response.data);
  };

  useEffect(() => {
    searchGitUser();
  }, []);

  return (
    <TitleCard loading={!gitUser}>
      {gitUser && (
        <div className="flex w-full gap-x-8">
          <img
            src={gitUser.avatar_url}
            className="w-[9.25rem] h-[9.25rem] rounded-lg"
          />
          <div className="flex flex-col flex-1 py-2 gap-y-2 justify-between">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h1 className="text-ig-title text-2xl">{gitUser.name}</h1>

                <a
                  href={`https://github.com/${gitUser.login}`}
                  target="_blank"
                  className="text-ig-brand"
                >
                  GitHub <FiExternalLink className="inline" />
                </a>
              </div>

              {gitUser.bio}
            </div>

            <div className="gap-6 flex">
              <div className="items-center flex gap-2">
                <FiGithub />
                {gitUser.login}
              </div>
              <div className="items-center flex gap-2">
                <BiBuilding />
                {gitUser.company}
              </div>
              <div className="items-center flex gap-2">
                <FiUsers />
                {gitUser.followers} Seguidores
              </div>
            </div>
          </div>
        </div>
      )}
    </TitleCard>
  );
});
