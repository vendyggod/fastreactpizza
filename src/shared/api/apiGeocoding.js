export async function getAddress({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );
    if (!res.ok) throw Error("Failed getting address");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error fetching address: ${err.message}`);
    return null;
  }
}
