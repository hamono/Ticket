export default interface Ticket{
  remoteTicket:Details;
  sponsor:Details;
  standardTicket:Details;
}

interface Details{
  des:string;
  price:number;
  tips?:string;
}