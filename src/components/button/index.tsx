import { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";

export default forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    return (
        <Button {...props} ref={ref}>
            {children}
        </Button>
    );
});
