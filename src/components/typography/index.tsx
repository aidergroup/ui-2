import { forwardRef } from "react";
import { Typography, TypographyProps } from "@mui/material";

export default forwardRef<HTMLElement, TypographyProps>(({ children, ...props }, ref) => {
    return (
        <Typography {...props} ref={ref}>
            {children}
        </Typography>
    );
});
