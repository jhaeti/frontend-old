import { Stack,TextField } from "@mui/material"

const MyTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row" color="primary">
                <TextField label="Name" variant="filled" />
            <div>Enteree</div>
            </Stack>
            
        </Stack>
    );
}

export default MyTextField;