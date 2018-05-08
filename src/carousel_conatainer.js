import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0;
  height: 100%;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  
  transform: ${(props) => {
    if (props.numSlides === 1) return 'translateX(0%)';
    if (props.numSlides === 2) {
        if (!props.sliding && props.direction === 'next') return 'translateX(calc(-100% - 60px))';
        if (!props.sliding && props.direction === 'prev') return 'translateX(-20px)';
        if (props.direction === 'prev') return 'translateX(calc(-100% - 60px))';
        return 'translateX(0%)';
    }
    if (!props.sliding) return 'translateX(calc(-100% - 60px))';
    if (props.direction === 'prev') return 'translateX(calc(2 * (-100% - 60px)))';
    return 'translateX(0)'
}};
`;
export default CarouselContainer