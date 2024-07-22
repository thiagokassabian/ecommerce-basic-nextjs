"use client"

import ContextoCarrinho from "@/data/contexts/ContextoCarrinho"
import useCarrinho from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"
import { useContext } from "react"

export default function Carrinho() {
	const { qtdeItens } = useCarrinho()

	return (
		<Link href="/carrinho" className="relative">
			<span
				className="
				flex items-center justify-center rounded-full bg-red-600
				text-xs text-white w-6 h-6 absolute -top-2.5 -right-2.5">
				{qtdeItens}
			</span>
			<IconShoppingCart stroke={1} size={32} />
		</Link>
	)
}
