// Web3Forms delivers website submissions to admin@zarq.co.za (the inbox registered with this key). The access key is public by
// design: it only allows sending submissions to that inbox.
const WEB3FORMS_ACCESS_KEY = '03670228-c0a6-42d4-9315-60b6b015694b';

/** Sends fields to the ZARQ inbox. Resolves true when Web3Forms accepted the submission. */
export async function sendToInbox(fields: Record<string, string | boolean>): Promise<boolean> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, from_name: 'ZARQ website', ...fields }),
  });
  const data = await response.json().catch(() => ({}));
  return response.ok && data.success === true;
}
