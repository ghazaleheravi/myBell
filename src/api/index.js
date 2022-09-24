import { mock } from './mock'

export const getMedias = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(mock)
    }, 300)
  })
}

export const addToWatchlist = (id) => {
  const success = Math.random() <= 0.95 ? true : false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ message: `Added media ${id}`, status: 200 })
      } else {
        reject({ message: `Error ${id}`, status: 422 })
      }
    }, 300)
  })
}

export const removeFromWatchlist = (id) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ message: `Removed media ${id}`, status: 200 })
    }, 300)
  })
}
