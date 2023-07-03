import { useState } from "react";
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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { newCycleSchema } from "../../@types/zod-schema";

interface Cycle {
  id: string;
  task: string;
  minutesAmout: number;
}
type NewCycleProps = z.infer<typeof newCycleSchema>;

export function Home() {
  const [cycle, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleProps>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      minutesAmount: 0,
      task: "",
    },
  });

  function handleCreateNewCycle(data: NewCycleProps) {

    console.log(data);
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmout: data.minutesAmount,
    };
    setCycle((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id)
    reset();
  }

  const activeCycle = cycle.find(cycle => cycle.id === activeCycleId)

  console.log(activeCycle)

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou estudar </label>
          <TaskInput
            id="task"
            placeholder="Estudar Geografia"
            list="task-suggestions"
            {...register("task")}
          />
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
            {...register("minutesAmount", { valueAsNumber: true })}
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

        <Button type="submit" disabled={isSubmitDisable}>
          {" "}
          <PlayIcon /> Comecar{" "}
        </Button>
      </form>
    </HomeContainer>
  );
}
