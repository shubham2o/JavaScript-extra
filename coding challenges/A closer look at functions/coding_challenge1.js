const poll = {
    question: "What is your favourite programming language?",
    options: ["0 : JavaScript", "1 : Python", "2 : Rust", "3 : C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

// 1.
    registerNewAnswer() {
        // 1.1 ~ Get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join("\n")}\n(Write option number)`
            )
        );
        console.log(`           => 1.1 <=`);
        console.log(answer);
        
        // 1.2 ~ Register answer
        typeof answer === "number" && 
        answer < this.answers.length && 
        this.answers[answer]++;
        
        // 4.
        console.log(`           => 4 <=`);
        this.displayResults();
        this.displayResults("string");
    },

// 3. 
    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        }
        else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`)
        }
    
    }
};

console.log(`1 ~~~~~~~~~~~~ ~~~~~~~~~~~~ ~>`);
poll.registerNewAnswer();

console.log(`
2 ~~~~~~~~~~~~ ~~~~~~~~~~~~ ~>`);
poll.displayResults.call({answers: [5, 2, 3]});

console.log(`
3 ~~~~~~~~~~~~ ~~~~~~~~~~~~ ~>`);
poll.displayResults.call({answers: [5, 2, 3]}, "string");

console.log(`
4 ~~~~~~~~~~~~ ~~~~~~~~~~~~ ~>`);
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});

console.log(`
5 ~~~~~~~~~~~~ ~~~~~~~~~~~~ ~>`);
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, "string");