import z from "zod";
export const newCycleSchema = z.object({
  task: z.string().min(1, "Informe o a tarefa"),
  minutesAmount: z
    .number()
    .min(5, "O ciclo precisa ter no minimo 5 minutos")
    .max(60, "O ciclo precisa ter no máximo 60 minutos"),
});
