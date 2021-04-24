export interface Submit {
  remoteTicket: number;
  sponsor: number;
  standardTicket: number;
  buyer: Buyer;
  participant: Participant[];
}

interface Buyer {
  phoneNumber: string;
  email: string;
}

interface Participant {
  name: string;
  id: string;
  gender: string;
}
