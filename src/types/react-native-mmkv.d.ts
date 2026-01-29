declare module 'react-native-mmkv' {
  export class MMKV {
    constructor(options?: { id?: string; encryptionKey?: string })
    set(key: string, value: any): void
    getString(key: string): string | undefined
    delete(key: string): void
  }
}
