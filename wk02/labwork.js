let makePromise = (a) =>
  new Promise((resolve, reject) => {
    if (a == 10) {
      resolve({ status: true, msg: "success" });
    } else {
      reject({ status: false, msg: "failure" });
    }
  });

const callAsync = async () => {
  console.log("call-1");
  try {
    let response = await fetch("https://dummyjson.com/users");
    console.log("call-2");
    response = await response.json();
    console.log("call-3");

  } catch (e) {
    console.log("error!");
  }
  console.log("call-4");
};

callAsync();
