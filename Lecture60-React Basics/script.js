import { add, substract } from "./calculator.js"; //You are importing add as an module
import print from "./print.js";

print("Addition", add(2, 3));
print("Substraction", substract(12, 3));

axios
  .get("https://jsonplaceholder.typicode.com/todosss/1")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
