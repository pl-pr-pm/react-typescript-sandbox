export const Practice4 = () => {
  const calcTax = (val: number): void => {
    const total: number = val * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTax(1000);
  };

  return (
    <div>
      <p>Practice4: Edit Setting File</p>
      <button onClick={onClickPractice}>RUN</button>
    </div>
  );
};
