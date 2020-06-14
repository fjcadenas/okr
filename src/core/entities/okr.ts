export default interface Okr {
  id?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  companyId: string;
  createdAt: Date;
  modifiedAt: Date;
}