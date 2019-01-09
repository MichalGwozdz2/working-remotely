
export class Worker {

  public index: number;
  public username: string;
  public email: string;
  public password: string;
  public type: string;

  constructor(index: number, username: string, email: string, password: string, type: string) {
    this.index = index;
    this.username = username;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
