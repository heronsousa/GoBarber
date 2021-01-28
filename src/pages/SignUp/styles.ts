import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 50px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;

            margin-top: 24px;
            text-decoration: none;

            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
        }
    }

    > a {
        display: flex;
        align-items: center;

        color: #f4ede8;
        margin-top: 24px;
        text-decoration: none;

        transition: color 0.2s;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackground}) no-repeat center;
    background-size: cover;
`;