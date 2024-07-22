import { createContext, useState } from "react";
import Produto from "../model/Produto";
import ItemCarrinho from "../model/ItemCarrinho";

interface ContextoCarrinhoProps {
	itens: ItemCarrinho[]
	adicionar: (produto: Produto) => void
	qtdeItens: number
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as ContextoCarrinhoProps);

export function ProvedorCarrinho(props: any) {
	const [itens, setItens] = useState<ItemCarrinho[]>([])

	const adicionar = (produto: Produto) => {
		const item = itens.find(i => i.produto.id === produto.id)

		if (item) {
			item.quantidade++
			setItens([...itens])
		} else {
			setItens([...itens, { produto, quantidade: 1 }])
		}
	}


	return <ContextoCarrinho.Provider value={{
		itens,
		adicionar,
		qtdeItens: itens.reduce((total, item) => total + item.quantidade, 0)

	}}>{props.children}</ContextoCarrinho.Provider>
}

export default ContextoCarrinho;