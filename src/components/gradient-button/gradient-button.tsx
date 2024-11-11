import { component$, Slot } from '@builder.io/qwik';

export interface GradientButtonProps {
  innerText?: string,
}

export const GradientButton = component$<GradientButtonProps>((props) => {
  return (
    <button class="flex">
      <Slot/>
    </button>
  );
});
