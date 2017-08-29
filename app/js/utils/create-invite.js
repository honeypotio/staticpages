import 'whatwg-fetch';
import dataFetcher from './data-fetcher';

export default {
  perform(values) {
    return fetch(dataFetcher.buildURL('/api/v1/invite_requests'), {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        invite_request: {
          name: values.companyName,
          hiring_location: values.hiringLocation,
          number_of_employees: values.numberOfEmployees,
          contact_email: values.contactEmail,
          contact_name: values.contactPerson,
          contact_phone: values.phoneNumber
        }
      })
    });
  }
};
