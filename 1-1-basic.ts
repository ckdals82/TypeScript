{
  //javaScript
  //number
  const num: number = 3;

  //string
  const str: string = '안녕 타입스크립트';

  //boolean
  const boal: boolean = false;

  //undefined
  let age1: undefined; //💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  //null
  let person: null; //💩
  person = null;

  //unknown //💩
  let notSure: unknown = 0;
  //어떤 타입이든 들어오는것 .
  //가능하면 웬만하면 쓰지 않는 것이 좋음.

  //any 💩
  //이 친구도 가능하면 쓰지 않는 것이 좋음

  //void
  //함수에서 return 하는 것이 아무것도 없을때 , 일반 변수에서 할당하면 undefined밖에 못 들어감!
  function vo(): void {
    return;
  }

  //never
  //리턴문이 없다.
}
