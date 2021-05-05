import styles from "./styles.module.css";

interface CssProps {}

function Css(props: CssProps) {
  return (
    <>
      <h1 className={styles.title}>CSS</h1>
    </>
  );
}

export default Css;
