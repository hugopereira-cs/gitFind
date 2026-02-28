import styles from "./Button.module.css";

export function Button({ onClick }) {
	return (
		<button type="button" className={styles.searchBtn} onClick={onClick}>
			Buscar
		</button>
	);
}
