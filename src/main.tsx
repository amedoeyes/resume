import { ThemeProvider } from "next-themes";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./router.tsx";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>
);
