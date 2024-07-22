import { IconShoppingCartOff } from "@tabler/icons-react"
import Link from "next/link"

export default function CarrinhoVazio() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 text-zinc-500">
			<IconShoppingCartOff size={150} stroke={0.5} />
			<h2 className="text-2xl font-bold">Carrinho vazio</h2>
			<p>Adicione produtos ao carrinho para continuar</p>
			<Link href="/" className="bg-green-800 text-white px-3 py-2 rounded">
				Ver produtos
			</Link>
		</div>
	)
}
