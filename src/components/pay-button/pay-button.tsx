import { component$ } from '@builder.io/qwik';
import styles from "./pay-button.module.css";

export interface PayButtonProps {

}

export const PayButton = component$<PayButtonProps>((props) => {
  return (
    <div>
      PayButton component works!
    </div>
  );
});
