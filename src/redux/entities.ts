
export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName:string
  status: string
  location: {
    city: string
    country: string}
}
export type UserStateType = {
  users: Array<UserType>
}