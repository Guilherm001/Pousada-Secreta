
import "./globals.css";
import Topo from "@/componentes/topo";
import Lateral from "@/componentes/lateral/lateral";
import Layout from "./layout.module.css"


export const metadata = {
  title: "sistema camila",
  description: "sistem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className={Layout.container}>
          <Topo />
          <div className={Layout.container_filho}>
            <div className={Layout.lateral}>
              <Lateral />
            </div>
            <div className={Layout.page}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
