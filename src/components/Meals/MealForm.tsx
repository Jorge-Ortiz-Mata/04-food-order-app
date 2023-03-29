import React, { useState } from "react";

interface MealFormProps {
  onSubmitAmount: (amount: number) => void;
}

const MealForm = ({onSubmitAmount}:MealFormProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const amount = e.target.value;
    setValue(parseInt(amount));
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    onSubmitAmount(value);
  }

  return(
    <form className="flex flex-col gap-2 items-end justify-center" onSubmit={handleSubmit} >
      <div className="flex items-center gap-2">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          onChange={handleChange}
          className="border p-1 text-sm font-semibold rounded w-20"
        />
      </div>
      <div className="flex items-center">
        <input type="submit" value="Add" />
      </div>
    </form>
  )
}

export default MealForm;
