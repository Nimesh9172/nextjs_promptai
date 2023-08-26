import Nav from "@/components/Nav";
import "@/styles/global.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = (props) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {props.children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
