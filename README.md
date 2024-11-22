## TodoApp-with-JS

### 결과물
[결과물](https://nahyukk.github.io/TodoApp-with-JS/) 구경하기 <br><br>
![result](https://github.com/user-attachments/assets/965d579e-c6a7-4c6a-93aa-c7004a0cf25d)




### <하위과제>
  1. 변수명을 명확하게, 함수는 최소한의 단위로 나눠서 사용<br>
  2. 페이지를 새로고침 해도 데이터가 지속(localStorage 이용)

### Feedback
* 결과는 잘 나왔지만 함수를 최소한의 단위로 나눠서 사용하지 못했음 <br>
* 결과물 페이지에 favicon과 icon이 왜 안되는지 모르겠음...(원인을 찼았다.)
  1) favicon 링크 코드에 asset 위치가 잘못 되었다. href="/assets/fabicon.png"
  ```
     <link rel="icon" type="image/x-icon" href="assets/fabicon.png"/>
   ```
  3) icon이 안뜬건 http를 썼었는데 github.io 가 기본적으로 https를 쓰기 때문에 수정했더니 잘 된다.
  ```
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  ```
