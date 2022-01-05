export const Practice3 = () => {
  const getCalcTax = (val: number): number => {
    const total: number = val * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: number;
    total = getCalcTax(1000);
    console.log(total);
  };

  return (
    <div>
      <p>Practice3: return val type</p>
      <button onClick={onClickPractice}>RUN</button>
    </div>
  );
};
