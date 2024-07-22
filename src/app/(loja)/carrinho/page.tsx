"use client"

import CardItemCarrinho from "@/components/carrinho/CardItemCarrinho"
import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

export default function CarrinhoPage() {
	const { qtdeItens, itens } = useCarrinho()

	return (
		<Pagina className="carrinho">
			{qtdeItens === 0 ? (
				<p>Carrinho vazio</p>
			) : (
				<>
					<div className="flex flex-col gap-5">
						{itens.map((item, index) => (
							<CardItemCarrinho key={index} item={item} />
						))}
					</div>
					<div>Total: R$ {itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0).toFixed(2)}</div>
				</>
			)}
		</Pagina>
	)
}
