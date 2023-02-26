import { render, screen } from "@testing-library/react";
import {
  Home,
  LOGO_TEST_ID,
  WELCOME_TEST_ID,
  BUTTON_TEST_ID,
} from "./screens/Home";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Homepage Logo", () => {
  it("renders the Logo", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const Logo = screen.getByTestId(LOGO_TEST_ID);
    expect(Logo).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });
});

describe("Homepage Welcome Text", () => {
  it("renders the Welcome Text", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const TextElement = screen.getByTestId(WELCOME_TEST_ID);
    expect(TextElement).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });
});

describe("Homepage Buttons", () => {
  it("renders the  DJ and Audience buttons", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const ButtonElement = screen.getByTestId(BUTTON_TEST_ID);
    expect(ButtonElement).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });
});
