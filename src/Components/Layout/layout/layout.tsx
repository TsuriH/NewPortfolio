import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
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
                <div id="about"><About /></div>
                <div id="projects"><MyProjects /></div>
                <div id="contact"><Contact /></div>
            </main>

        </div>
    );
}
