import Link from "next/link";
import Logo from "./Logo";
import Carrinho from "./Carrinho";

export default function Cabecalho() {
	return (
		<header className="bg-gray-900 text-white h-20 px-5 flex justify-between items-center">
			<Logo />
			<Carrinho />
		</header>
	)
}