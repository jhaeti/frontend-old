import { useState } from "react";
import {
    Button,
    Stack,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MyButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    const handleFormatChange = (
        e: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats);
    };

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
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Larg
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    disableRipple
                    onClick={() => console.log("Clicked")}
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    disableElevation
                >
                    Send
                </Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction="row">
                <ButtonGroup
                    variant="contained"
                    aria-label="alignment button group"
                    size="small"
                    color="secondary"
                    orientation="vertical"
                >
                    <Button onClick={() => alert("Left")}>Left</Button>
                    <Button onClick={() => alert("Center")}>Center</Button>
                    <Button onClick={() => alert("Right")}>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup
                    color="success"
                    exclusive
                    value={formats}
                    size="large"
                    orientation="horizontal"
                    aria-label="text formatting"
                    onChange={handleFormatChange}
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default MyButton;
