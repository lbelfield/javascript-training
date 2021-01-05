// NOTE: These three are the same...
//1
await new Promise((myCallBack) => {
  return setTimeout(() => {
    myCallBack();
  }, 5000);
})

//2
await new Promise((myCallBack) => { setTimeout(() => { myCallBack() }, 5000); });
//3
await new Promise(myCallBack => setTimeout(myCallBack, milliSeconds))



//
const waitFor = async (milliSeconds) => new Promise(resolve => setTimeout(resolve, milliSeconds));

const consoleLog = async () => {
  await waitFor(5000);
  console.log("hello");
};
consoleLog();


//
const array = [];
array.push(1,2,3,4,5,6,7);
array.slice(0,4);
array.slice(4,8);
array.slice(8,12);
