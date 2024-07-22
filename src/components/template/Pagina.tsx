import Cabecalho from "./Cabecalho";

export interface PaginaProps {
	children: React.ReactNode;
	className?: string;
}

export default function Pagina(props: PaginaProps) {
	return (
		<div className={`${props.className}`}>
			<Cabecalho />
			<main className="container mx-auto flex-1 my-5">{props.children}</main>
		</div>
	)

}