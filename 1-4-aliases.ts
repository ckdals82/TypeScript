{
  // type aliases 새로운 타입을 내가 정할 수 있음.
  type Text = string;
  const name: Text = 'ellie';

  //   type aliaes 를 사용하려면 새로운 타입을 내가 지정할 수 있고
  // 예약어는 앞에 type을 붙인다. 그리고 대문자로 시작
  // 객체에도 가능하다.

  type Inside = {
    name: string;
    age: number;
  };
  const hwang: Inside = {
    name: 'changMin',
    age: 30
  };

  //  그리고 타입 자체에 문자열을 할당과 타입도 지정할수있다. 오직 문자열만?
  // String Literal Types
  type Name = 'name';
  let changMin: Name;
  changMin = 'name';
}
