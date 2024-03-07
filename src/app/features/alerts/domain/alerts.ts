  export interface AlertRes {
  id: string;
  name: string;
  description: string;
  severity: number;
  date: string;
  source: string;
  isDismissed?: boolean
}

export interface Alert extends AlertRes{
  isDismissed?: boolean;
}

