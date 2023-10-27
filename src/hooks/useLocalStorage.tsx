import React from "react";

export default function useLocalStorage(key: string) {
  const [localState, setLocalState] = React.useState<any>(null);

  const setLocalValue = (value: any, quantity: number) => {
    const oldValues =
      JSON.parse(window.localStorage.getItem(key) as string) || [];

    const isFound = oldValues.find((item: any) => item.product.id === value.id);
    if (isFound) return;

    window.localStorage.setItem(
      key,
      JSON.stringify([...oldValues, { quantity, product: value }])
    );

    const newValues = JSON.parse(window.localStorage.getItem(key) as string);
    setLocalState(newValues);
    ``;
  };

  const deleteLocalValue = (id: number) => {
    const oldValues =
      JSON.parse(window.localStorage.getItem(key) as string) || [];

    const newValues = oldValues.filter((item: any) => item.product.id !== id);
    window.localStorage.setItem(key, JSON.stringify(newValues));

    const newValues2 = JSON.parse(window.localStorage.getItem(key) as string);
    setLocalState(newValues2);
  };

  React.useEffect(() => {
    const value = JSON.parse(window.localStorage.getItem(key) as string);
    setLocalState(value);
  }, [key]);
  return [localState, setLocalValue, deleteLocalValue, setLocalState];
}
