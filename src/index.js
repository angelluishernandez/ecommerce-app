import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { ProductProvider } from "./components/contexts/ProductProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<ProductProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ProductProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
