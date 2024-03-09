import { useEffect } from "react";

const useIsTop = () => {
  return window.scrollY > 80;
};
