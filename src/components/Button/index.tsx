import styled from "styled-components";

interface ButtonType {
    label: String;
    variant: String;
}

const Button = ({ label, variant, ...props }: ButtonType) => {
    return (
        <StyledButton className={`btn btn--${variant}`} {...props}>
            {label}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    &.btn {
        color: #bc5b14;
    background: #ffecde;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 3px;
    border: 3px solid #bc5b14;

    &--primary {
        background: red;
    }
    &--secondary {
        background: green;
    }
    }
    
`;

export default Button;
