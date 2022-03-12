import styled from "styled-components";

export const AvailableContainer = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  .MealsLoading{
    text-align: center;
    color: black;
  }

  .MealsError{
    text-align: center;
    color: red;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`