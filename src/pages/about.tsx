import Link from "next/link";
import MyButton from "../components/mui/Button";
import MyTypography from "../components/mui/Typography";
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
                    {/* <MyTypography /> */}
                    <MyButton />
                </Description>
            </Main>
        </Container>
    );
}

export default About;
