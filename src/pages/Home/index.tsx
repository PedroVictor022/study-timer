import { PlayIcon } from "lucide-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou estudar </label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit">
          {" "}
          <PlayIcon /> Comecar{" "}
        </button>
      </form>
    </HomeContainer>
  );
}
