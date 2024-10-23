class ArrayProcessor {
    #data

    constructor(arr) {
        this.#data = arr;
    }
    get_processed() {
        let _result = [];
        this.#data.forEach(element => {
            _result.push(this.#evaluate(element));
        });
        return _result;
    }
    #evaluate(variable) {
        if (variable < 0) {
            return this.#negative_process(variable);
        }
        else {
            return this.#positive_process(variable);
        }
    }
    #negative_process(value) {
        return value**3;
    }
    #positive_process(value) {
        return value**2;
    }
}

function _range(start, end, step = 1) {
    return Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => start + i * step);
}

function _evaluate() {
    let x = _range(-10, 11, 1)
    processor = new ArrayProcessor(x);
    let y = processor.get_processed();
    let answer = [];
    for (i=0; i<x.length; i++) {
        console.log("pushing");
        answer.push(`x = ${x[i]}; y = ${y[i]}`);
    }
    document.getElementById("result").innerHTML = answer.join("\n");
}