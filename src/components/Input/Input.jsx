import styles from "./Input.module.css";

export function Input({ value, onChange }) {
	return (
		<input
			className={styles.search}
			type="text"
			value={value}
			onChange={onChange}
			placeholder="@username"
		/>
	);
}
