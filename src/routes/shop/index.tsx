import { component$ } from "@builder.io/qwik";
import styles from "@shop/shop.module.css";

export default component$(() => {
  return (
    <>
      <h1 class={["text-3xl font-bold underline", styles.greetings]}>Hello World!</h1>
    </>
  );
});
