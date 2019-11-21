import React, { useMemo } from 'react';
import {
    Container,
    Header,
    Left,
    Icon,
    LeftText,
    Time,
    Question,
} from './styles';

const HelpOrder = ({ data, ...rest }) => {
    const answered = useMemo(() => !!data.answer, [data.answer]);

    return (
        <Container {...rest}>
            <Header>
                <Left>
                    <Icon answered={answered} />
                    <LeftText answered={answered}>
                        {answered ? 'Respondido' : 'Sem resposta'}
                    </LeftText>
                </Left>
                <Time>{data.formattedDate}</Time>
            </Header>
            <Question>{data.question}</Question>
        </Container>
    );
};

export default HelpOrder;
