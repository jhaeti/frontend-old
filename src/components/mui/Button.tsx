import { Button, Stack } from "@mui/material";
const MyButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Text</Button>
                <Button variant="outlined">Text</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    primary
                </Button>
                <Button variant="contained" color="warning">
                    warning
                </Button>
                <Button variant="contained" color="secondary">
                    secondary
                </Button>
                <Button variant="contained" color="error">
                    error
                </Button>
                <Button variant="contained" color="info">
                    info
                </Button>
                <Button variant="contained" color="success">
                    success
                </Button>
            </Stack>
            <Stack spacing={2} direction="row" display="block">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Larg</Button>
            </Stack>
        </Stack>
    );
};

export default MyButton;
