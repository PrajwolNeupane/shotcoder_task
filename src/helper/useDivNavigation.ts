import { useEffect, useState } from "react";
import { ProductInteface } from "../Interface";

const useDivNavigation = (
  initialIndex: number,
  array: Array<ProductInteface | null>,
  navigate: (path: string) => void
): [number, (indx: number) => void] => {
  const [selectedDivIndex, setSelectedDivIndex] =
    useState<number>(initialIndex);

  const setSelectedIndex = (indx: number) => {
    setSelectedDivIndex(indx);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedDivIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedDivIndex((prevIndex) =>
          prevIndex < array.length - 1 ? prevIndex + 1 : prevIndex
        );
      }
    };

    if (window !== undefined) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (window !== undefined) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [array]);

  useEffect(() => {
    const handleClick = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        navigate(`/product/${array[selectedDivIndex]?.id!}`);
      }
    };
    if (window !== undefined) {
      document.addEventListener("keydown", handleClick);
    }
    return () => {
      if (window !== undefined) {
        document.removeEventListener("keydown", handleClick);
      }
    };
  }, [selectedDivIndex]);

  return [selectedDivIndex, setSelectedIndex];
};

export default useDivNavigation;
