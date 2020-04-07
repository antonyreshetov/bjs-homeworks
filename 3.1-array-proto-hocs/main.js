function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {

    }
  };

function sum(...args) {
  sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length){
        return false;
    }
    return arr1.every((element, index) => element == arr2[index]);
}

function memorize(fn, limit) {
  let results = [];

  return function() {
    let args = Array.from(arguments);
    // console.log(args);
    let memoryTest = results.find((item) => {
      return compareArrays(item.args, args);
	});

	if(memoryTest) {
		return results.result;
	};

	let finding = fn(...args);
	// console.log(finding);

	results.push (
		{
			args: args,
			result: finding
		});


	if(results.length > limit) {
		results.shift();
	}

	// console.log(results);
	return finding;
  }
}

const mSum = memorize(sum, 5);
console.log(sum(3, 4, 4, 7, 3, 4)); // 25
console.log(mSum(3, 4, 8)); // 15

function testCase (testFunction, name) {
  let items = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];

  console.time(name);

  let i=0;
  while (i <= 10000) {
    items.forEach(item => testFunction.apply(items));
    i++;
  }

  console.timeEnd(name);
}
