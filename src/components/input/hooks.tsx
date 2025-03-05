import { InputAdornment, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const usePasswordInput = () => {
    const [isVisible, setIsVisible] = useState(false);
    const passwordType = isVisible ? "text" : "password";

    return {
        PasswordAdornment: (
            <InputAdornment position="end">
                <Button
                    tabIndex={-1}
                    type="button"
                    sx={{
                        background: "none",
                        padding: "0",
                        minWidth: "10px",
                        "&:hover": {
                            background: "transparent",
                        },
                    }}
                    onClick={() => {
                        setIsVisible(prev => !prev);
                    }}
                    title={isVisible ? "Hide password" : "Show password"}
                >
                    {isVisible ? (
                        <VisibilityOffIcon sx={{ width: "18px" }} />
                    ) : (
                        <VisibilityIcon sx={{ width: "18px" }} />
                    )}
                </Button>
            </InputAdornment>
        ),
        passwordType,
    };
};
export { usePasswordInput };
