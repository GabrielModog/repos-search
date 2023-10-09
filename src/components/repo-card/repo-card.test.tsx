import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoCard from ".";
import ThemeProvider from "../theme-provider";
import { defineMatchMediaObjectMock } from "@/utils/tests";

describe("Repo Card Component", () => {
  beforeAll(() => {
    defineMatchMediaObjectMock();
  });
  test("Should render card", () => {
    const onClickHandle = jest.fn();
    render(
      <ThemeProvider>
        <RepoCard
          id="1"
          title="Test"
          description="lorem ispum test"
          onClick={onClickHandle}
        />
      </ThemeProvider>
    );
    const element = screen.getByTestId("repocard_1");
    expect(element).toBeInTheDocument();
  });
});
