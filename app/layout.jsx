import Nav from "@/components/Nav";
import "@/styles/global.css";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = (props) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {props.children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
