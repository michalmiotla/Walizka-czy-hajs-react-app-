import styles from './HugeButton.module.css'

export function HugeButton({ children }) {
	return <button className={styles.button}>{children}</button>
}
