import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment'; // moment 라이브러리 추가
import { stampGreen } from '../../assets/icons';
import ContainedButton from '../../components/button/ContainedButton';

// Styled-components로 스타일을 적용한 컴포넌트들
const StyledCalendarWrapper = styled.div`
    /* 스타일들 */
`;

const StyledButtons = styled.div`
    display: flex;
    padding: 10px;
`;

const StyledButton = styled(ContainedButton)`
    margin: 10px;
`;

const StyledCalendar = styled(Calendar)``;

const StyledDate = styled.button`
    /* 스타일들 */
`;

const StyledToday = styled.div`
    /* 스타일들 */
`;

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());
    const today = new Date();

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleTodayClick = () => {
        setDate(today);
    };

    return (
        <StyledCalendarWrapper>
            <StyledButtons>
                {' '}
                <ContainedButton btnType="primary" text="오늘" size="mid" onClick={handleTodayClick}>
                    오늘
                </ContainedButton>
                <ContainedButton size="large" text="지난 시험지 보기"></ContainedButton>
            </StyledButtons>
            <StyledCalendar
                value={date}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format('D')}
                formatYear={(locale, date) => moment(date).format('YYYY')}
                formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                tileContent={({ date, view }) =>
                    view === 'month' && date.getDay() === 0 ? <img src={stampGreen} /> : null
                }

                //   tileContent={
                //     ({ date, view }) => {
                //       const html = [];
                //       if (
                //           view === 'month' &&
                //           date.getMonth() === today.getMonth() &&
                //           date.getDate() === today.getDate()
                //       ) {
                //           // if () 도장을 받았다면
                //           html.push(<StyledToday key={'today'}>오늘</StyledToday>);
                //       }
                //       // 도장
                //       return <>{html}</>;
                //   }
                // }
            />{' '}
        </StyledCalendarWrapper>
    );
};

export default MyCalendar;
