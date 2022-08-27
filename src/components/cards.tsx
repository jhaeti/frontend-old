import styled from "styled-components";
import Link from "next/link";
import { FlexContainer } from "./sharedstyles";

const Card = styled.div`
    padding: 1.5rem;
    color: inherit;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 100%;

    &:hover,
    :focus,
    :active {
        color: #0070f3;
        border-color: #0070f3;
    }
`;

const StyledA = styled.a`
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
`;

const StyledLink = ({ href, name }) => (
    <Link href={href} passHref>
        <StyledA>{name}</StyledA>
    </Link>
);

export default function Cards() {
    return (
        <FlexContainer>
            <Card>
                <StyledLink href="/about" name="About Page &rarr;" />
                <StyledLink href="/form" name="Form Test Page &rarr;" />
            </Card>
        </FlexContainer>
    );
}
