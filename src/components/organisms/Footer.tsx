import { Link } from "react-router-dom";
const tabs = [
	{
		label: "会員登録",
		router: "",
	},
	{
		label: "運営会社",
		router: "",
	},
	{
		label: "利用規約",
		router: "",
	},
	{
		label: "個人情報の取扱について",
		router: "",
	},
	{
		label: "特定商取引法に基づく表記",
		router: "",
	},
	{
		label: "お問い合わせ",
		router: "",
	},
];
const Footer = () => {
	return (
		<footer className='w-screen flex-wrap max-h-fit min-h-32 bg-dark-500 flex items-center justify-center gap-x-12'>
			{tabs.map((tab) => (
				<Link to={tab.router} className="text-light text-[11px] font-light leading-4">{tab.label}</Link>
			))}
		</footer>
	);
};

export default Footer;
