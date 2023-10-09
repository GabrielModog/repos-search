export interface RepoDetailsObject {
  id: number;
  forks: number;
  created_at: string;
  git_url: string;
  language: string;
  visibility: string;
}

export interface RepoObject extends RepoDetailsObject {
  full_name: string;
  description: string;
}
