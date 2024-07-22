import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
	return (
			<Link href="/" className="flex flex-col items-center">
				Loja
				<IconBrandAmazon size={30} stroke={1} className="-mt-2" />
			</Link>
	)
}