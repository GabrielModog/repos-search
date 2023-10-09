import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoDetails from ".";
import ThemeProvider from "../theme-provider";
import { defineMatchMediaObjectMock } from "@/utils/tests";
import { RepoDetailsObject } from "@/types";

const repo_mock: RepoDetailsObject = {
  id: 1,
  visibility: "public",
  forks: 324,
  created_at: "03/03/3003",
  git_url: "wrwerwerwerwerwe",
  language: "test",
};

describe("Repo Details Component", () => {
  beforeAll(() => {
    defineMatchMediaObjectMock();
  });
  test("Should render details", () => {
    render(
      <ThemeProvider>
        <RepoDetails repo={repo_mock} />
      </ThemeProvider>
    );
    const element = screen.getByTestId("details_1");
    expect(element).toBeInTheDocument();
  });

  test("Should render forks in details", () => {
    render(
      <ThemeProvider>
        <RepoDetails repo={repo_mock} />
      </ThemeProvider>
    );
    const element = screen.getByTestId("details-fork");
    expect(element).toBeInTheDocument();
  });

  test("Should render forks in date", () => {
    render(
      <ThemeProvider>
        <RepoDetails repo={repo_mock} />
      </ThemeProvider>
    );
    const element = screen.getByTestId("details-date");
    expect(element).toBeInTheDocument();
  });
});
