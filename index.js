#!/usr/bin/env node
import crypto from 'crypto';
import chalkAnimation from 'chalk-animation';
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(`
=======================================================================
>>>>>>>>>>>>>>>>>>>>>>> STUDENT MANAGEMENT SYSTEM <<<<<<<<<<<<<<<<<<<<<
=======================================================================
`);
    await sleep();
    title.stop();
}
await welcomeScreen();
class Student {
    name;
    studentID;
    balance;
    course;
    constructor(name) {
        this.name = name;
        this.studentID = crypto.randomBytes(3).toString('hex');
        this.balance = 0;
        this.course = [];
    }
    ;
    enroll(amount, course) {
        this.balance = amount;
        this.course.push(...course);
    }
    ;
    payTutionFees(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`
            Name:${this.name}
            StudentID:${this.studentID}
            studentCourse:${this.course}
            Balance:${this.balance};
        `);
    }
    ;
}
;
const student1 = new Student('Ali');
student1.enroll(30005, ['metaverse', 'web3.0']);
student1.payTutionFees(3000);
student1.showStatus();
