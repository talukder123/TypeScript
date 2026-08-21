interface student {
    name: string;
    marks: number[];
}

interface result {
    name: string
    average:number
    result:string
}

function getStudentResult(students: student):result {

    const totalMarks = students.marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / students.marks.length

    let res = ""
    if (average >= 40) {
        res = "Passed"
    } else {
        res = "Failed"
    }

    return {
        name: students.name,
        average:average,
        result:res
    }
 
}

const st01 = {
    name: "Nabil",
    marks: [80, 80, 20, 57]
}

console.log(getStudentResult(st01));