export default interface PaymentTransfer {
  id?: number | string;
  title: string;
  description?: string;
  payer: string;
  payee: string;
  bank?: string;
  formattedValue?: string;
  date: {
    dateObj: Date;
    weekDay: string;
    month: string;
    monthDay: string;
  };
}
