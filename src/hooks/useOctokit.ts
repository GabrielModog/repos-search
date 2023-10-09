import { Octokit } from "octokit";

export default function useOcktokit() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_TOKEN,
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
