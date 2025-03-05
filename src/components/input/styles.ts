import { styled, Typography } from "@mui/material";

export const Styled = {
    Container: styled("div")<{ label?: string }>`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `,
    HelperText: styled(Typography)`
        font-size: 12px;
        font-weight: 400;
        line-height: "15.6px";
        color: #ed5454;
    `,
};
