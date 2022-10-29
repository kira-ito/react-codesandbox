import { memo } from "react";
import styled from "styled-components";

export const App = memo((props) => {
  const { text, countState } = props;
  console.log(`${text}ボタンがクリックされました`);
  return (
    <div className="App">
      <SButton>
        <button onClick={countState}>{text}</button>
      </SButton>
    </div>
  );
});

const SButton = styled.div`
  margin: 10px;
`;
