import { ApolloError } from 'apollo-server-errors';
import phoneNumberParser from 'libphonenumber-js';

export function parsePhone(phone: string, code: string) {
  const phoneNumber = phoneNumberParser(phone, {
    defaultCallingCode: code.replace('+', ''),
  });

  if (!phoneNumber?.nationalNumber) {
    throw new ApolloError('Invalid phone number.');
  }

  return {
    nationalNumber: phoneNumber?.nationalNumber as string,
    countryCallingCode: '+' + phoneNumber?.countryCallingCode,
    number: phoneNumber?.number as string,
  };
}
