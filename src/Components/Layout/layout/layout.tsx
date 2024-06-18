import { About } from "../About/About";
import { Header } from "../Header/Header";
import { MyProjects } from "../MyProjects/MyProjects";
import "./layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="layout">

            <header>
                <Header />
            </header>

            <main>
                <About />
                <MyProjects />
            </main>

        </div>
    );
}
