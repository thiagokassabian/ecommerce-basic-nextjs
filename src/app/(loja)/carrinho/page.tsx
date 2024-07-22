"use client"

import CardItemCarrinho from "@/components/carrinho/CardItemCarrinho"
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio"
import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

export default function CarrinhoPage() {
	const { qtdeItens, itens } = useCarrinho()
	const total = itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)

	return (
		<Pagina className="carrinho">
			{qtdeItens === 0 ? (
				<CarrinhoVazio />
			) : (
				<>
					<div className="flex flex-col gap-5">
						{itens.map((item, index) => (
							<CardItemCarrinho key={index} item={item} />
						))}
					</div>
					<div className="flex justify-between items-center mt-5 p-5 bg-zinc-900">
						<div className="flex flex-col">
							<span className="text-gray-500">Total</span>
							<span className="text-xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
						</div>
						<button className="bg-green-900 px-3 py-2 rounded">Finalizar</button>
					</div>
				</>
			)}
		</Pagina>
	)
}
