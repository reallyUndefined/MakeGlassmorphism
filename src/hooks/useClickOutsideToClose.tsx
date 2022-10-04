import { useEffect, useRef } from "react";

const useClickOutsideToClose = (
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        isOpen &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setIsOpen!(false);
      }
    }

    document.addEventListener("mouseup", closeNavMenu);

    return () => {
      document.removeEventListener("mouseup", closeNavMenu);
    };
  }, [isOpen, setIsOpen]);

  return node;
};

export default useClickOutsideToClose;
