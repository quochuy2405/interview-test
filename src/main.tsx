import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopPage from "./pages/TopPage";
import RecordPage from "./pages/RecordPage";
import RecommendPage from "./pages/RecommendPage";
import "./styles/global.css";
import DefaultLayout from "./layouts/DefaultLayout";
const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				index: true,
				element: <TopPage />,
			},
			{
				path: "/record",
				element: <RecordPage />,
			},
			{
				path: "/recommend",
				element: <RecommendPage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
