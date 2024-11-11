import { component$ } from "@builder.io/qwik";
import { Logo } from "@icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <Logo height={50} width={143} />
          </a>
        </div>
        <ul class={styles.menu}>
          <li class={styles.menuItem}>
            <a href="shop/" target="_blank">
              Shop
            </a>
          </li>
          <li class={styles.menuItem}>
            <a
              href="https://qwik.dev/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li class={styles.menuItem}>
            <a
              href="https://qwik.dev/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
