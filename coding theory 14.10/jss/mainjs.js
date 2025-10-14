function calc_factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function use_factorial(n, result) {
    let fact = calc_factorial(n);
    result.innerText = fact;
}
