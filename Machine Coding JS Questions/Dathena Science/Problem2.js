// To determine the error in code
function myFunction() {

    let res =  solution(4, [1, 2, 3,1, 2, 3,1, 3, 1,4]);
    
  console.log(res);

}

function solution(M, A) {
    var N = A.length;
    var count = new Array(M + 1);
    var i;
    for (i = 0; i <= M; i++)
        count[i] = 0;
    var maxOccurence = 0;
    var index = 0;
    for (i = 0; i < N; i++) {
        if (count[A[i]] > 0) {
            var tmp = count[A[i]] + 1;
            if (tmp > maxOccurence) {
                maxOccurence = tmp;
                index = i;
            }
            count[A[i]] = tmp;
        } else {
            count[A[i]] = 1;
        }
    }
    return A[index];
}