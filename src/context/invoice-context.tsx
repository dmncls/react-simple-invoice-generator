import { createContext, Dispatch, SetStateAction } from 'react';
import { IInvoice } from '@/interfaces/invoice';
import Moment from 'moment';

// Faker.
// import { faker } from '@faker-js/faker';

// Interfaces
export interface IInvoiceContext {
  invoice: IInvoice;
  setInvoice: Dispatch<SetStateAction<IInvoice>>;
}

/** Initial state */
export const initialInvoiceData: IInvoice = {
  fileName: '',
  invoiceNumber: '#INV'+Moment().format('YYMMDD'),
  date: String(new Date()),
  due: String(new Date()),
  sender: {
    companyName: 'Change for Good Hypnosis',
    firstName: '',
    lastName: '',
    country: '',
    addressLine1: '40 Wareela St',
    addressLine2: '',
    state: 'QLD',
    city: 'Murarrie',
    phone: '0424 931 282',
    email: 'dominic@changeforgoodhypnosis.com.au',
  },
  recipient: {
    companyName: '',
    firstName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    phone: '',
    email: '',
  },
  items: [],
  taxRate: 0,
  terms: 'Payable within 14 days of invoice date.',
  notes: 'Payable within 14 days of invoice date.',
  footerMessages: 'Change for Good Hypnosis, ABN 18 992 770 580 - Not registered for GST',
  paymentInfo: {
    accountName: 'Change for Good Hypnosis',
    accountNumber: '',
    bankAccount: '123-345',
  },
};

/**
 * Invoice context
 */
export const invoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);
