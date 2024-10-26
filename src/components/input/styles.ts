import { styled } from "@mui/material";
import Typography from "../typography";

export const Styled = {
    Container: styled("div")`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    `,
    HelperText: styled(Typography)`
        font-size: 12px;
        font-weight: 400;
        line-height: "15.6px";
        color: #ed5454;
    `,
    Placeholder: styled("div")`
        height: "31.4px";
        width: 100%;
    `,
};
