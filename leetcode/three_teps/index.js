var waysToStep = function(n) {
    let m = 1e9+7
    let dp = [0,1,2,4]
    for(let i = 4; i<n+1; i++){
        dp[i] = (dp[i-1] + dp[i-2] + dp[i-3])%m
    }
    return dp[n]
};

