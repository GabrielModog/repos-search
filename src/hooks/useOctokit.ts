import { Octokit } from "octokit";
import { useSession } from "next-auth/react";

export default function useOcktokit() {
  const { data: session } = useSession();

  const octokit = new Octokit({
    auth: session?.accessToken?.access_oken,
  });

  async function searchRepository(repoName: string) {
    const { data, status } = await octokit.rest.search.repos({
      q: repoName,
    });
    return {
      data,
      status,
    };
  }

  return {
    searchRepository,
  };
}
