import { useContext } from "react";
import { TransitionContext } from "../context/transition";

export const useTransition = () => useContext(TransitionContext);
