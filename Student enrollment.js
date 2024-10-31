let DSA = [];
let PL = [];
let Networks = [];

function enrollStudent(subject) {
    let name = prompt(`Enter the name of the student to enroll in ${subject}:`); //It prompts the user to enter the name of the student they want to enroll
    if (name) {
        if (subject === 'DSA') DSA.push(name); //If the subject is DSA, the student's name is added to the DSA array
        else if (subject === 'PL') PL.push(name); //Similar logic for PL
        else if (subject === 'Networks') Networks.push(name); // Similar logic for Networks
        console.log(`${name} has been enrolled in ${subject}.`);  // A confirmation message is displayed
    }
}

function unenrollStudent(subject) {
    let students;  // Declares a variable to store the relevant student list
    if (subject === 'DSA') students = DSA; // If the subject is DSA, the DSA array is assigned to the students variable.
    else if (subject === 'PL') students = PL;
    else if (subject === 'Networks') students = Networks;

    if (students.length === 0) { // If there are no students enrolled in the subject, a message is displayed
        console.log(`No students are currently enrolled in ${subject}.`);
        return;
    }

    console.log(`Currently enrolled students in ${subject}: ${students.join(', ')}`);  // Displays the names of currently enrolled students in the subject
    let name = prompt(`Enter the name of the student to unenroll from ${subject}:`);  // Prompts the user to enter the name of the student they want to unenroll
    let index = students.indexOf(name);  // Finds the index of the student's name in the relevant array
    
    if (index !== -1) {  // If the student's name is found, it is removed from the array using splice
        students.splice(index, 1);
        console.log(`${name} has been unenrolled from ${subject}.`);  // A confirmation message is displayed 
    } else {
        console.log(`${name} is not enrolled in ${subject}.`);
    }
}

function main() {
    while (true) {  // This loop continues until the user chooses to exit
        let subjectChoice = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks, (D) Exit").toUpperCase();  // It prompts the user to select a subject
        
        let selectedSubject;  // Declares a variable to store the selected subject
        if (subjectChoice === 'A') selectedSubject = 'DSA';  // If the user chooses 'A', the selectedSubject is set to 'DSA'
        else if (subjectChoice === 'B') selectedSubject = 'PL';
        else if (subjectChoice === 'C') selectedSubject = 'Networks';
        else if (subjectChoice === 'D') {
            console.log('Final enrollment lists:');
            console.log(`DSA: ${DSA.join(', ')}`);
            console.log(`PL: ${PL.join(', ')}`);
            console.log(`Networks: ${Networks.join(', ')}`);
            break;
        } else { // If the user enters an invalid choice, an error message is displayed
            console.log('Invalid choice. Please try again.');
            continue;
        }

        while (true) {  // This loop continues until the user chooses to select another subject or exit
            let operationChoice = prompt("Select an operation (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();  // It prompts the user to select an operation
            
            if (operationChoice === 'A') {
                enrollStudent(selectedSubject);  // If the user chooses 'A', the enrollStudent function is called with the selected subject
            } else if (operationChoice === 'B') {
                unenrollStudent(selectedSubject);  // If the user chooses 'B', the unenrollStudent function is called with the selected subject
            } else if (operationChoice === 'C') {
                break;  // If the user chooses 'C', the inner loop breaks, and the user can select another subject
            } else if (operationChoice === 'D') {
                console.log('Final enrollment lists:');  // If the user chooses 'D', the program exits, displaying the final enrollment lists
                console.log(`DSA: ${DSA.join(', ')}`);
                console.log(`PL: ${PL.join(', ')}`);
                console.log(`Networks: ${Networks.join(', ')}`);
                return;
            } else { // If the user enters an invalid choice, an error message is displayed
                console.log('Invalid choice. Please try again.');
            }
        }
    }
}

main();
