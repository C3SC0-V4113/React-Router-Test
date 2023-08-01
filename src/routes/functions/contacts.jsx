import { getContact } from "../../helpers/contacts";

export async function loaderContacts({ params }) {
  const contact = await getContact(params.contactId);
  return contact;
}
