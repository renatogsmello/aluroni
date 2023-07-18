"use client"
import styles from "./Cardapio.module.scss"
import logo from "../assets/logo.svg"
import Buscador from "./Buscador/page"
import { useState } from "react"
import Filtros from "./Filtros/page"
import Ordenador, { OpcoesOrdenador } from "./Ordenador/page"
import Itens from "./Itens/page"

export default function Cardapio() {
	const [busca, setBusca] = useState("")
	const [filtro, setFiltro] = useState<number | null>(null)
	const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("")
	return (
		<main>
			<nav className={styles.menu}>
				<img src={logo.src} width={152} height={64} alt="Logo" />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>A casa do código e da massa</div>
			</header>
			<section className={styles.cardapio}>
				<h3 className={styles.cardapio__titulo}>Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className={styles.cardapio__filtros}>
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</main>
	)
}
