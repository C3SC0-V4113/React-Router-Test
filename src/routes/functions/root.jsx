import { redirect } from "react-router-dom";
import { createContact, getContacts } from "../../helpers/contacts";

export async function loaderRoot() {
  const contacts = await getContacts();
  return { contacts };
}

export async function actionRoot() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
