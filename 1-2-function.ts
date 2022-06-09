{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(1, 2);

  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}
