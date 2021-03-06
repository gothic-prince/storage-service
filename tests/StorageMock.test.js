import { StorageMock } from '../dist/index'
describe('StorageMock', () => {
  const storage = new StorageMock()

  it('should return false', () => {
    expect(storage.hasKey('user_id')).toBe(false)
  })
  it('should return true', () => {
    storage.setData('user_id', 5)
    expect(storage.hasKey('user_id')).toBe(true)
  })
  it('should return 5', () => {
    expect(storage.getData('user_id')).toBe(5)
  })
})
