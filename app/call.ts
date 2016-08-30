export class Call {
  constructor(
    public id: number,
    public method: string,
    public url: string,
    public body?: string
  ) { }
}
