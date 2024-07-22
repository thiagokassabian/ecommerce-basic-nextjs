import { createContext, useEffect, useState } from "react"
import Produto from "../model/Produto"
import ItemCarrinho from "../model/ItemCarrinho"
import useLocalStorage from "../hooks/useLocalStorage"

interface ContextoCarrinhoProps {
	itens: ItemCarrinho[]
	adicionar: (produto: Produto) => void
	qtdeItens: number
	remover: (produto: Produto) => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as ContextoCarrinhoProps)

export function ProvedorCarrinho(props: any) {
	const [itens, setItens] = useState<ItemCarrinho[]>([])
	const { set, get } = useLocalStorage()

	useEffect(() => {
		const carrinho = get("carrinho")

		if (carrinho) setItens(carrinho)
	}, [get])

	const adicionar = (produto: Produto) => {
		const item = itens.find(i => i.produto.id === produto.id)

		if (item) {
			item.quantidade++
			alterarItens([...itens])
		} else {
			alterarItens([...itens, { produto, quantidade: 1 }])
		}
	}

	const remover = (produto: Produto) => {
		const item = itens.find(i => i.produto.id === produto.id)

		if (item) {
			item.quantidade--

			if (item.quantidade <= 0) {
				alterarItens(itens.filter(i => i.produto.id !== produto.id))
			} else {
				alterarItens([...itens])
			}
		}
	}

	const alterarItens = (items: ItemCarrinho[]) => {
		setItens(items)
		set("carrinho", items)
	}

	return (
		<ContextoCarrinho.Provider
			value={{
				itens,
				adicionar,
				remover,
				qtdeItens: itens.reduce((total, item) => total + item.quantidade, 0)
			}}>
			{props.children}
		</ContextoCarrinho.Provider>
	)
}

export default ContextoCarrinho
