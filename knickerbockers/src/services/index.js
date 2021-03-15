export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/Team`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
}