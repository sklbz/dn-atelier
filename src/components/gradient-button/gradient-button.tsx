import { component$, Slot } from "@builder.io/qwik";
import styles from "./gradient-button.module.css";

export const GradientButton = component$(() => {
  return (
    <div class={styles.wrapper}>
      <button class={styles.outerButton}>
        <span class={[styles.innerButton]}>
          <Slot />
        </span>
      </button>
    </div>
  );
});
