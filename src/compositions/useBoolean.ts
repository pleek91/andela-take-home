import { ref, type Ref } from "vue";

type UseBoolean = {
  value: Ref<boolean>;
  setValue: (value: boolean) => void;
  setTrue: () => void;
  setFalse: () => void; 
  toggle: () => void;
};

export const useBoolean = (initialValue: boolean = false): UseBoolean => {
  const boolean = ref(initialValue);

  const setValue = (value: boolean) => {
    boolean.value = value;
  };

  const setTrue = () => {
    boolean.value = true;
  };

  const setFalse = () => {
    boolean.value = false;
  };

  const toggle = () => {
    boolean.value = !boolean.value;
  };

  return {
    value: boolean,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
};
