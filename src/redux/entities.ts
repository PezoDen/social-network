export type UserType = {
  id: number
  photos:  {
  small: string | null
  large: string | null
}
followed: boolean
name:string
status: string
location: {
  city: string
  country: string
}
}
export type UserStateType = {
  users: Array<UserType>
}