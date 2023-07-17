function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function helloAsync() {
  await delay(3000);
  return "hello Async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
