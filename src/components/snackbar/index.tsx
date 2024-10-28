import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import useSnackbar from "./hooks";

export default () => {
    const { message, severity, visible, hide } = useSnackbar();

    if (!visible) return null;

    return (
        <Snackbar
            open={true}
            autoHideDuration={4000}
            onClose={hide}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert
                onClose={hide}
                severity={severity}
                variant="filled"
                sx={{ width: "100%", fontSize: "14px" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
