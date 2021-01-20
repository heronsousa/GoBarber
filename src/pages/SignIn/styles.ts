import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

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

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #f4ede8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        button {
            height: 56px;
            width: 100%;
            margin-top: 16px;

            background: #ff9000;
            border: 0;
            border-radius: 10px;
            padding: 0 16px;

            color: #312e38;
            font-weight: 500;

            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#ff9000')};
            }
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

        color: #ff9000;
        margin-top: 24px;
        text-decoration: none;

        transition: color 0.2s;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover;
`;
