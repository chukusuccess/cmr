import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Audience, FORM_TEST_ID } from "./screens/Audience";
import { Dj, LIST_TEST_ID } from "./screens/Dj";
import {
  Home,
  LOGO_TEST_ID,
  WELCOME_TEST_ID,
  BUTTON_TEST_ID,
} from "./screens/Home";

// mocking useNavigate Hook. This is a necessity.
const mockedUsedNavigate = jest.fn();

// setting up browser router to be used as wrapping component. Not so necessary but for caution.
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// testing the Homepage Logo is in the DOM
describe("Homepage Logo", () => {
  it("renders Homepage with the Logo", async () => {
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

// testing the Welcome Text is in the DOM
describe("Homepage Welcome Text", () => {
  it("renders the Homepage with Welcome Text", async () => {
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

// testing the Homepage Buttons(DJ and Audience buttons) is in the DOM
describe("Homepage Buttons", () => {
  it("renders the Homepage with DJ and Audience buttons", async () => {
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

// testing the Music Request form is in the DOM
describe("Music Request Form", () => {
  it("renders the Audience page with the Music Request Form", async () => {
    render(
      <BrowserRouter>
        <Audience />
      </BrowserRouter>
    );
    const FormElement = screen.getByTestId(FORM_TEST_ID);
    expect(FormElement).toBeInTheDocument();
  });
});

// testing the Music List is in the DOM
describe("Dj music list", () => {
  it("renders the DJ Page with Music list", async () => {
    render(
      <BrowserRouter>
        <Dj />
      </BrowserRouter>
    );
    const ListElement = screen.getByTestId(LIST_TEST_ID);
    expect(ListElement).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeDefined();
  });
});
