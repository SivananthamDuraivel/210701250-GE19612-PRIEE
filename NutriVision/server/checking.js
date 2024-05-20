const { PythonShell } = require('python-shell');

let options = {
    scriptPath: "C:/Users/sivan/OneDrive/Desktop/PRIEE/server",
    args: ["siva", "16"], // Note: Arguments should be strings
};

PythonShell.run("./prediction.py", options, (err, res) => {
    if (err) {
        console.error("Error occurred while running Python script:", err);
    } else {
        console.log("Python script executed successfully.");
        if (res) {
            console.log("Output from Python script:", res);
        } else {
            console.log("No output received from Python script.");
        }
    }
});
