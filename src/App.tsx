import * as Styled from "./styles/App.styles";
import { api } from "./api/config";
import { useEffect, useState } from "react";

function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    api
      .get("characters", { params: { limit: 100, offset: 100 } })
      .then((response) => {
        setCharacterData(response.data.data.results);
      });
  }, []);

  console.log(characterData[99]);

  return (
    <Styled.Main>
      <h1>Welcome to Marvel API</h1>
      <Styled.ContainerCardHero>
        <Styled.CardHero>Hello</Styled.CardHero>
      </Styled.ContainerCardHero>
    </Styled.Main>
  );
}

export default App;
