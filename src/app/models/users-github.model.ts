export interface iUsersGithub {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  followers_url: string;
  repos_url: string;
}
export interface iCard {
  login: string;
  avatar: string;
  id: string;
}

export interface iReposGithub {
  name: string;
  description: string;
  language: string;
}

export interface iUser {
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;
  followers: number;
  following: number;
  name: string;
  bio: string;
  company: string;
  followers_url: string;
  public_repos: number;
  location: string;
}

export interface iSearch {
  items: iUsersGithub[];
}

export interface iInfo {
  incomplete_results: boolean;
  items: iUsersGithub[];
  total_count: number;
}

export interface iUsersGithubState {
  usersGithub: ReadonlyArray<iUser>;
}

export interface iFollowersGithubState {
  followersGithub: ReadonlyArray<iUsersGithub>;
}

export interface iReposGithubState {
  reposGithub: ReadonlyArray<iReposGithub>;
}
