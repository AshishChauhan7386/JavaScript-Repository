const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Fetch Data!");
    } else {
      reject("Error!");
    }
  }, 2000);
});

fetchData
  .then((result) => {
    console.log(result);
    return isSuccess(result);
  })
  .then((FinalData) => {
    console.log(FinalData);
  })
  .catch((error) => {
    console.error(error);
  });

const isSuccess = (msg) =>
  new Promise((resolve, reject) => {
    const isSuccess = true;
    if (isSuccess) {
      resolve(`${msg} - Ashish Chauhan`);
    } else {
      reject("Error");
    }
  });
