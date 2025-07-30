import * as readline from "readline";

export function promptYesNo(question: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(`${question} [y/N] `, (answer) => {
            const normalizedAnswer = answer.toLowerCase();
            if (normalizedAnswer === "y" || normalizedAnswer === "yes") {
                resolve(true);
            } else {
                resolve(false);
            }
            rl.close();
        });
    });
}
