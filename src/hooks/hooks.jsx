import data from "../assets/data.json"

export const useFindApartment = (id) => {
    const apartment = data.find((flat) => flat.id === id)
    let error
    if (!apartment) error = true
    return { error, apartment}
  }
  