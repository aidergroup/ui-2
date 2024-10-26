import { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";
import { Styled } from "./styles";

interface Props extends ButtonProps {
    loading?: boolean;
}

export default forwardRef<HTMLButtonElement, Props>(
    ({ children, loading, variant, disabled, ...props }, ref) => {
        return (
            <Button {...props} variant={variant} disabled={disabled} ref={ref}>
                {loading ? (
                    <Styled.Spinner buttonVariant={variant} buttonDisabled={disabled} size={18} />
                ) : null}
                {children}
            </Button>
        );
    },
);
