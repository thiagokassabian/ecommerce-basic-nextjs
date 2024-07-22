import useCarrinho from "@/data/hooks/useCarrinho"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import Image from "next/image"

interface CardItemCarrinhoProps {
	item: ItemCarrinho
}

export default function CardItemCarrinho(props: CardItemCarrinhoProps) {
	const { item } = props

	const { adicionar, remover } = useCarrinho()

	return (
		<div className="flex items-center bg-zinc-900 gap-5 pr-5">
			<div className="relative w-28 h-28">
				<Image src={item.produto.imagem} alt={item.produto.nome} fill className="object-cover" />
			</div>
			<div className="flex-1">
				<h2 className="text-lg font-bold">{item.produto.nome}</h2>
				<div className="text-gray-500">
					R$ {item.produto.preco.toFixed(2)} x {item.quantidade} =
					<span className="ml-2 font-bold text-yellow-200">R$ {(item.quantidade * item.produto.preco).toFixed(2)}</span>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button className="hover:text-red-400 transition-all" onClick={() => remover(item.produto)}>
					<IconMinus />
				</button>
				<span className="inline-block py-1 w-10 bg-black text-center">{item.quantidade}</span>
				<button className="hover:text-green-400 transition-all" onClick={() => adicionar(item.produto)}>
					<IconPlus />
				</button>
			</div>
		</div>
	)
}
