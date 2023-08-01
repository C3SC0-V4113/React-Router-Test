import { redirect } from "react-router-dom";
import { createContact, getContacts } from "../../helpers/contacts";

export async function loaderRoot({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function actionRoot() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
