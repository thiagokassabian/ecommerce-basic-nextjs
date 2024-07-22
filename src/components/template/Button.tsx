interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export default function Button(props: ButtonProps) {
	return (
		<button
			className={`
				rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans
				text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20
				transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85]
				focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none
				disabled:opacity-50 disabled:shadow-none ${props.className}`}
			onClick={props.onClick}>
			{props.children}
		</button>
	)
}
