// import {MMKV} from 'react-native-mmkv'
// import type { Storage } from 'redux-persist';

// const storage = new MMKV ();

// const reduxStorage: Storage = {
//     setItem: (key, val) => {
//         storage.set(key,val)
//         return Promise.resolve(true)
//     },
//     getItem: (key) => {
//         const value = storage.getString(key)
//         return Promise.resolve(value ?? null)
//     },
//     removeItem: (key) => {
//         storage.delete(key)
//         return Promise.resolve()
//     }
// }

// export default reduxStorage



/// --------------- up is right ----------------

// const reduxStorage = {
//   setItem: () => Promise.resolve(true),
//   getItem: () => Promise.resolve(null),
//   removeItem: () => Promise.resolve(),
// }

// export default reduxStorage





// import { MMKV } from 'react-native-mmkv'
// import type { Storage } from 'redux-persist'

// const storage = new MMKV()

// const reduxStorage: Storage = {
//   setItem: (key, value) => {
//     storage.set(key, value)
//     return Promise.resolve(true)
//   },
//   getItem: key => {
//     const value = storage.getString(key)
//     return Promise.resolve(value)
//   },
//   removeItem: key => {
//     storage.delete(key)
//     return Promise.resolve()
//   },
// }

// export default reduxStorage
