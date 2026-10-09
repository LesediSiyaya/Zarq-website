// Web3Forms delivers website submissions to admin.zarq@gmail.com. The access key is public by
// design: it only allows sending submissions to that inbox.
const WEB3FORMS_ACCESS_KEY = 'd217695d-772d-4c9d-8e01-72119cb30bb5';

/** Sends fields to the Zarq inbox. Resolves true when Web3Forms accepted the submission. */
export async function sendToInbox(fields: Record<string, string | boolean>): Promise<boolean> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, from_name: 'Zarq website', ...fields }),
  });
  const data = await response.json().catch(() => ({}));
  return response.ok && data.success === true;
}
