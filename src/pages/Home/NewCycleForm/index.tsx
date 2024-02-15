import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../contexts/CyclesContext";

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalha em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome ao seu projeto."
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-sugestions">
        <option value="Value 1" />
        <option value="Value 2" />
        <option value="Value 3" />
        <option value="Value 4" />
      </datalist>

      <label htmlFor="minutesAmount">durente</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
