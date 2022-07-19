import Link from "next/link";
import {
    Container,
    Main,
    Title,
    Description,
} from "../components/sharedstyles";

export default function About() {
    return (
        <Container>
            <Main>
                <Title>About Page</Title>
                <Description>
                    <Link href="/">
                        <a>&larr; Go Back to where ever you came from</a>
                    </Link>
                </Description>
            </Main>
        </Container>
    );
}
