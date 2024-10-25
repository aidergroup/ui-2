import { forwardRef } from "react";
import { Control, Controller } from "react-hook-form";
import { Input, InputLabel, InputProps } from "@mui/material";
import { Styled } from "./styles";
import { Type } from "@/types/input";

interface Props extends InputProps {
    label?: string;
    type?: Type;
    name: string;
    control: Control<any>;
}

export default forwardRef<HTMLInputElement, Props>(({ label, name, control, ...props }, ref) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <Styled.Container>
                        {label ? <InputLabel>{label}</InputLabel> : null}
                        <Input
                            {...props}
                            error={!!error}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                        />
                        {error && error.message ? (
                            <Styled.HelperText>{error.message}</Styled.HelperText>
                        ) : null}
                    </Styled.Container>
                );
            }}
        />
    );
});
