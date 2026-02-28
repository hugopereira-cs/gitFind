import styles from './ItemList.module.css';

export function ItemList({title, description}) {

  return (
    <div>
      <strong className={styles.repoTitle}>{title}</strong>
      <p className={styles.repoDescription}>{description}</p>
      <hr />
    </div>
  )
}
