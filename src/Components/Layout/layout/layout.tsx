import { About } from "../About/About";
import { Header } from "../Header/Header";
import "./layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="layout">

            <header>
                <Header />
            </header>

            <main>
                <About />
            </main>

        </div>
    );
}
