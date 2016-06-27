import 'whatwg-fetch';

export default {
  perform(values) {
    return fetch(`${$PROCESS_ENV_API_HOST}api/v1/invite_requests`, {
      method: 'POST',
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
