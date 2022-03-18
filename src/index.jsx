import { render } from "react-dom";

import App from "./App";
import { RegalosProvider } from "./context/RegalosContext";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
