import styles from "./page.module.scss";

export default function Home() {

  localStorage.setItem("user", "Marco Rossi");

  return (
      <main className="home">
          <h1 className={styles.title}>
              Welcome to dashboard {localStorage.getItem("user")}
          </h1>
      </main>
  );
}
