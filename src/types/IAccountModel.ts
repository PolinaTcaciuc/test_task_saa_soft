export default interface IAccountModel {
  id: string | null
  label: string | Array<{ text: string }> | null
  type: number | null
  login: string | null
  password: string | null
}
