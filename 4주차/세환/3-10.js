/* Api 호출 */
// fetch : api 호출 도와주는 내장함수 , 비동기 처리 -> then으로 처리 가능
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
