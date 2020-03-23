let witnesses = []


export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
      parsedWitnesses => {

        witnesses = parsedWitnesses.slice()

        console.log("THE WITNESSES FROM FETCH CALL")
      }
    )
}


export const useWitnesses = () =>
  witnesses.slice()