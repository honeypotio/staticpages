import 'whatwg-fetch';
import dataFetcher from './data-fetcher';

export default {
  perform(values) {
    dataFetcher.setCookieForStaging();
    return fetch(dataFetcher.buildURL('/api/v1/invite_requests'), {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        invite_request: {
          name: values.name,
          hiring_location: values.hiringLocation,
          number_of_employees: values.numberOfEmployees,
          contact_email: values.contactEmail,
          contact_name: values.contactName,
          contact_phone: values.contactPhone
        }
      })
    });
  }
};
