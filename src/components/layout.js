import styles from "./layout.module.css";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home, title = "JS" }) {
  const name = `Metamask by ${title}`;
  return (
    <div className={styles.container}>
      <link rel="icon" href="/favicon.ico" />
      <header className={styles.header}>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
