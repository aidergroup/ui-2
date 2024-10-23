import { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";

export default forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <Button {...props} ref={ref} />;
});
