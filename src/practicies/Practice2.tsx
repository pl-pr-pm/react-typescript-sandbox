export const Practice2 = () => {
  const getCalcTax = (val: number): number => {
    const total: number = val * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(getCalcTax(1000));
  };

  return (
    <div>
      <p>Practice2: return val type</p>
      <button onClick={onClickPractice}>RUN</button>
    </div>
  );
};
