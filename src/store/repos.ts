import { create } from "zustand";

type ReposStoreStatus = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

interface UseReposStore {
  repos: any[];
  status: ReposStoreStatus;
  setRepos: (data: any) => void;
  setStatus: (status: ReposStoreStatus) => void;
}

export const useReposStore = create<UseReposStore>((set) => ({
  repos: [],
  status: "IDLE",
  setStatus: (status) => set({ status }),
  setRepos: (data) => {
    set({ repos: data });
  },
}));
