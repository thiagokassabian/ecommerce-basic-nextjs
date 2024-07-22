"use client"

import Card from "@/components/produto/Card"
import Pagina from "@/components/template/Pagina"
import { produtos } from "@/data/constants/produtos"
import useCarrinho from "@/data/hooks/useCarrinho"

export default function Home() {
	const { qtdeItens } = useCarrinho()

	return (
		<Pagina className="home">
			<div className="flex flex-wrap items-top justify-center gap-4">
				{produtos.map((produto, index) => (
					<Card key={index} produto={produto} />
				))}
			</div>
		</Pagina>
	)
}
