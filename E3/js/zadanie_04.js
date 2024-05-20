function printNumbers(start, end) {
    let current = start;
    const intervalId = setInterval(function() {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 15);