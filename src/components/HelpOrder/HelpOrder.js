import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
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

HelpOrder.propTypes = {
    data: PropTypes.shape({
        answer: PropTypes.string,
        formattedDate: PropTypes.string,
        question: PropTypes.string,
    }).isRequired,
};

export default HelpOrder;
