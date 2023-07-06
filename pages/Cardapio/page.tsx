"use client"
import styles from "./Cardapio.module.scss"
import logo from "assets/logo.svg"
import Image from "next/image"
import Buscador from "./Buscador/page"
import { useState } from "react"

export default function Cardapio() {
	const [busca, setBusca] = useState("")
	return (
		<main>
			<nav className={styles.menu}>
				<Image src={logo} width={152} height={64} alt="Logo" />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>A casa do código e da massa</div>
			</header>
			<section className={styles.cardapio}>
				<h3 className={styles.cardapio__titulo}>Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
			</section>
		</main>
	)
}
