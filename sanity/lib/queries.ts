// 🔥 ANIMALI IN EVIDENZA (HOME)
export const featuredAnimalsQuery = `
  *[_type == "animal" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
    ageUnit,
    description,
    image,

    // GATTI
    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes,

    // CANI
    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`

// 🐱 TUTTI I GATTI
export const allAnimalsQuery = `
  *[_type == "animal" && species == "cat"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
    ageUnit,
    description,
    image,

    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus
  }
`

// 🐶 TUTTI I CANI
export const allDogsQuery = `
  *[_type == "animal" && species == "dog"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
    ageUnit,
    description,
    image,

    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`

// 🔎 SINGOLO ANIMALE (SLUG)
export const animalBySlugQuery = `
  *[_type == "animal" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
    ageUnit,
    hostLocation,
    description,
    image,
    empethyUrl,

    // GATTI
    coatLength,
    breed,
    isCrossbreed,
    crossbreedDetails,
    dewormed,
    microchipped,
    vaccinated,
    sterilized,
    fivStatus,
    felvStatus,
    specialConditions,
    healthNotes,

    // CANI
    dogSize,
    dogWeight,
    dogCoatLength,
    dogBreed,
    isCrossbreedDog,
    crossbreedDogDetails,
    dogDewormed,
    dogMicrochipped,
    dogVaccinated,
    dogSterilized
  }
`
export const adoptedAnimalsQuery = `
  *[_type == "animal" && adoptionStatus == "adopted"] | order(name asc) {
    _id,
    name,
    slug,
    species,
    sex,
    ageValue,
    ageUnit,
    image
  }
`
export const allEventsQuery = `
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    date,
    time,
    location,
    street,
    contacts,
    poster
  }
`