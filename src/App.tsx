import * as Styled from "./styles/App.styles";
import { api } from "./api/config";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

function App() {
  const [characterData, setCharacterData] = useState<HeroProps[]>([]);

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
        <Styled.CardHero>
          <span>{characterData[99]?.name}</span>
          <img
            src={`${characterData[99].thumbnail.path}.${characterData[99].thumbnail.extension}`}
            alt="Image do herói aqui"
          />
        </Styled.CardHero>
      </Styled.ContainerCardHero>
    </Styled.Main>
  );
}

export default App;
