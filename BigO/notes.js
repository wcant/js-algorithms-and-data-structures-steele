
// For this slower case, the number of operations scale linearly with n, so this is O(n)

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



// For this faster case, the number of operations are constant (3), so this is O(1)
function addUpTo(n) {
    return n * (n + 1) / 2;
  }

  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



  // For a case where you have an O(n) operation inside of another O(n) operation, such as
  // with a for loop with a nested for loop, then the number of operations is quadratic, so O(n^2)

  function printAllPairs(n) {
      for (var i = 0; i < n; i++) {
          for (var j = 0; j < n; j++) {
              console.log(i,j);
          }
      }
  }




  // Rules to help simplify O expressions

O(2n) ===> O(n)

O(500) ===> O(1)

O(13n^2) ===> O(n^2)