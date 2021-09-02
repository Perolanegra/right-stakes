export class AccountState {
    public id: string;
    public username: string;
    public password: string;
    public balance: string;
  
    constructor(username: string, password: string, balance: string, id: string) {
      this.username = username;
      this.password = password;
      this.balance = balance;
      this.id = id;
    }
  }
  