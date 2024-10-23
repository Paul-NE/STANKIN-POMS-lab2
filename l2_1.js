function on_submit() {
    a = Number(document.getElementById("a_input").value);
    b = Number(document.getElementById("b_input").value);
    c = Number(document.getElementById("c_input").value);

    x_stert = Number(document.getElementById("x_start_input").value);
    x_end = Number(document.getElementById("x_end_input").value);
    x_step = Number(document.getElementById("x_step_input").value);

    console.log(a);
    console.log(isNaN(a));
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(x_stert) || isNaN(x_step) || isNaN(x_end)
    ) {
        document.getElementById("result").innerHTML = "Incorrect value";
        return;
    }
    output = ["The work was done by Poul"]
    for (x=x_stert; x<=x_end; x+=x_step) {
        output.push(`x = ${x}; y = ${x*(a + b + c)}`);
    }

    document.getElementById("result").innerHTML = output.join("\n");
}


