import crypto from 'crypto'
class Student{
    name:string;
    studentID:string;
    balance:number;
    course:string[];
    constructor(name:string){
        this.name=name;
        this.studentID=crypto.randomBytes(3).toString('hex')
        this.balance=0;
        this.course=[];
    };
    enroll(amount:number,course:string[]){
        this.balance=amount;
        this.course.push(...course);
    };
    payTutionFees(amount:number){
        this.balance-=amount;
    }

    showStatus(){
        console.log(`
            Name:${this.name}
            StudentID:${this.studentID}
            studentCourse:${this.course}
            Balance:${this.balance};
        `)
    };
};

const student1=new Student('Ali');
student1.enroll(30005,['metaverse','web3.0']);
student1.payTutionFees(3000)
student1.showStatus();