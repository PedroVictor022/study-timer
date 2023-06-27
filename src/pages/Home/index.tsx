import { PlayIcon } from "lucide-react";
import { CountdownContainer, Button, FormContainer, HomeContainer, Separator, TaskInput, MinutesAmountInput } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou estudar </label>
          <TaskInput id="task" placeholder="Estudar Geografia"/>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <Button type="submit">
          {" "}
          <PlayIcon /> Comecar{" "}
        </Button>
      </form>
    </HomeContainer>
  );
}
