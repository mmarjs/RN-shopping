import { AsyncStorage } from 'react-native'
import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0.2',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    // whitelist: ['login', 'search', 'nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['auth', 'configuration', 'cart'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
