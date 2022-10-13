import Link from "next/link";
import MyTextField from "../components/mui/TextField";
import {
    Container,
    Main,
    Title,
    Description,
} from "../components/sharedstyles";

function About() {
    return (
        <Container>
            <Main>
                <Title>About Page</Title>
                <Description>
                    <Link href="/">
                        <a>&larr; Go Back to where ever you came from</a>
                    </Link>
                    <MyTextField />
                </Description>
            </Main>
        </Container>
    );
}

export default About;
