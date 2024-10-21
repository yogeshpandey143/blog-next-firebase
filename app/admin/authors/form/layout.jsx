import AuthorFormContextProvider from "../../authors/form/contexts/AuthorFormContext";

export default function Layout({ children }) {
  return <AuthorFormContextProvider>{children}</AuthorFormContextProvider>;
}
