export const Practice1 = () => {
  const calcTax = (val: number): void => {
    const total: number = val * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTax(1000);
  };

  return (
    <div>
      <p>Practice1: argument type</p>
      <button onClick={onClickPractice}>RUN</button>
    </div>
  );
};
