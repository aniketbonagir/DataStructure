// <!-- Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed. -->

function myFunction() {
	var prb1 = "001";
  console.log(num_ways_dp(prb1));

}

function num_ways_dp(data) {
    var memo = new Array(data.length+1);
    return helper_dp(data, data.length, memo);
}

function helper_dp(data, k, memo) {
    var s = data.length - k, res =0;
    if(k == 0) {
        return 1;
    } else if(data[s] == 0) {
        return 0;
    } else if(memo[k] != undefined) {
        return memo[k]
    }

    res = helper_dp(data, k-1, memo);

    if(k >= 2 && (+data.slice(s, s+2) <= 26)) {
        res += helper_dp(data, k-2, memo)
    }
    memo[k] = res;

    return res;
}