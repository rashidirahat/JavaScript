class Bank {
    constructor(accNumber, balance){
        this.accNumber = accNumber;
        this.balance = balance;
    }

    withdraw(amount){
        if (amount <= this.balance) {
            this.balance -= amount;
          } else {
            console.log('Insufficient balance.');
          }
          console.log(`remaining balance = ${this.balance}`)
    }

    deposit(amount){
       this.balance += amount;
       console.log(`new balance = ${this.balance}`)
    }
}

const branch = new Bank('6274', 1000);
branch.deposit(200);
branch.withdraw(600);
