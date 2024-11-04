import { ButtonProps, CircularProgress, styled } from "@mui/material";

export const Styled = {
    Spinner: styled(CircularProgress)<{
        variation: ButtonProps["variant"];
        disabled?: boolean;
    }>`
        color: ${({ variation, disabled, theme }) => {
            if (disabled && variation === "contained") {
                return "white";
            }

            if (disabled && (variation === "outlined" || variation == "text")) {
                return theme.palette.grey[400];
            }

            if (variation === "outlined" || variation === "text") {
                return theme.palette.primary.main;
            }
            return "white";
        }};
        margin-right: 16px;
    `,
};
