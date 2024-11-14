import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
