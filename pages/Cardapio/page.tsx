import styles from "./Cardapio.module.scss"
import logo from "assets/logo.svg"
import Image from "next/image"

export default function Cardapio() {
	return (
		<main>
			<nav className={styles.menu}>
				<Image src={logo} width={152} height={64} alt="Logo" />
			</nav>
		</main>
	)
}
