let marks: number[] = [78, 67, 98, 80];

function calculateAvg(marks: number[]): number {

    let n = marks.length;

    const totalMarks = marks.reduce((acc, mark) => {
        return acc + mark;
    }, 0);

    return totalMarks / n;
}

let Avg = calculateAvg(marks);
console.log(Avg);