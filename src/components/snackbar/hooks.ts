import { Severity } from "@/types/utils";
import { create } from "zustand";

interface State {
    visible: boolean;
    message: string;
    severity: Severity;
}

interface Actions {
    hide(): void;
    show(message: string, severity: Severity): void;
}

const initialState: State = {
    visible: false,
    message: "",
    severity: "info",
};

const useSnackbar = create<State & Actions>(set => ({
    ...initialState,
    hide: () => set(initialState),
    show: (message: string, severity: Severity) => set({ message, severity, visible: true }),
}));

export default useSnackbar;
