import styles from "./styles.module.scss";

interface SassProps {}

function Sass(props: SassProps) {
  return (
    <>
      <h1 className={styles.title}>SASS</h1>
    </>
  );
}

export default Sass;
