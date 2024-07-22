import useCarrinho from "@/data/hooks/useCarrinho"
import Produto from "@/data/model/Produto"
import Image from "next/image"
import Button from "../template/Button"

interface CardProps {
	produto: Produto
}

export default function Card(props: CardProps) {
	const { nome, preco, descricao, id, imagem } = props.produto

	const { adicionar } = useCarrinho()

	return (
		<div className="bg-gray-900">
			<div className="relative w-72 h-40">
				<Image src={imagem} fill alt={nome} className="object-cover" />
			</div>
			<div className="flex flex-col gap-4 p-4">
				<div className="flex-1">
					<p className="text-lg font-bold">{nome}</p>
					<p className="text-sm text-gray-500">{descricao}</p>
				</div>
				<div className="flex items-center justify-between">
					<p>R$ {preco.toFixed(2)}</p>
					<Button onClick={() => adicionar(props.produto)}>Comprar</Button>
				</div>
			</div>
		</div>
	)
}
