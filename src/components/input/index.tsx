import { CSSProperties, forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import { Input, InputLabel, InputProps } from "@mui/material";
import { Styled } from "./styles";
import { Type } from "@/types/input";
import { usePasswordInput } from "./hooks";

interface Props extends InputProps {
    name: string;
    control: Control<any>;
    type?: Type;
    label?: string;
    labelStyle?: CSSProperties;
}

export default forwardRef<HTMLInputElement, Props>(
    ({ label, labelStyle, name, control, type, ...props }, ref) => {
        const { PasswordAdornment, passwordType } = usePasswordInput();

        const inputType = type === "password" ? passwordType : (type ?? "text");
        const endAdornment = type === "password" ? PasswordAdornment : props.endAdornment;

        return (
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                        <Styled.Container>
                            {label ? <InputLabel style={labelStyle}>{label}</InputLabel> : null}
                            <Input
                                {...props}
                                sx={{ ...(label && { marginTop: "8px" }) }}
                                error={!!error}
                                onChange={onChange}
                                value={value}
                                ref={ref}
                                type={inputType}
                                endAdornment={endAdornment}
                            />
                            {error && error.message ? (
                                <Styled.HelperText>{error.message}</Styled.HelperText>
                            ) : (
                                <div style={{ width: "100%", height: "23.4px" }} />
                            )}
                        </Styled.Container>
                    );
                }}
            />
        );
    },
);
