import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm"
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Review: React.FC = () => {
    const [showLogin, setShowLogin] = useState(true);
    
    // Determine which form to show based on `showLogin` state
    const formToShow = showLogin ? <LoginForm /> : <RegisterForm />;
    const switchText = showLogin ? "New to Busking Maps?" : "Already have an account?";
    const switchLinkText = showLogin ? "Register an account" : "Login";
    const switchLinkAction = showLogin ? () => setShowLogin(false) : () => setShowLogin(true);

    return (
        <Container>
            {formToShow}
            <p className="mt-3">
                {switchText}{' '}
                <Link to="#" onClick={switchLinkAction}>
                    {switchLinkText}
                </Link>
            </p>
        </Container>
    );
};

export default Review;
