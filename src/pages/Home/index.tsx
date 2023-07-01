import { PlayIcon } from "lucide-react";
import {
  CountdownContainer,
  Button,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou estudar </label>
          <TaskInput id="task" placeholder="Estudar Geografia" list="task-suggestions" />
          <datalist id="task-suggestions">
            <option value="Estudar Geografia" />
            <option value="Estudar Matematica" />
            <option value="Estudar Direito" />
            <option value="Estudar Ingles" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />

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
