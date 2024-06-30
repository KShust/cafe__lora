const drinksFce = async () => {
    const response = await fetch(`http://localhost:4000/api/drinks`)
    const json = await response.json()
    return json.data
}

export const drinks = drinksFce()