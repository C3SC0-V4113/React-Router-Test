import { getContact, updateContact } from "../../helpers/contacts";

export async function loaderContacts({ params }) {
  const contact = await getContact(params.contactId);
  return contact;
}

export async function actionContacts({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
