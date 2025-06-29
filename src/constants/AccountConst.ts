import type { IAccountColumn } from '@/types/IAccountColumn'

export const ACCOUNT_TYPE_LIST = [
  { id: 1, label: `Локальная` },
  { id: 2, label: `LDAP` },
]

export const defaultAccountColumnElements: Array<IAccountColumn> = [
  {
    name: `label`,
    value: `label`,
    ref: `AccountLabel`,
    content: `BaseField`,
    classes: [`label`],
    label: `Метки`,
    width: `200`,
    props: {
      placeholder: `Введите метки`,
      type: `text`,
      clearable: true,
      maxlength: `50`,
    },
  },
  {
    name: `type`,
    value: `type`,
    ref: `AccountType`,
    content: `BaseSelect`,
    classes: [`type`],
    label: `Тип`,
    width: `200`,
    props: {
      placeholder: `Тип`,
      filterable: true,
      clearable: true,
      optionLabel: `label`,
      optionKey: `id`,
      optionValue: `id`,
      options: ACCOUNT_TYPE_LIST,
    },
  },
  {
    name: `login`,
    value: `login`,
    ref: `AccountLogin`,
    classes: [`login`],
    label: `Логин`,
    content: `BaseField`,
    props: {
      placeholder: `Логин`,
      required: true,
      type: `text`,
      clearable: true,
      maxlength: `100`,
    },
  },
  {
    name: `password`,
    value: `password`,
    ref: `AccountPassword`,
    classes: [`password`],
    content: `BaseField`,
    label: `Пароль`,
    width: `200`,
    props: {
      type: `password`,
      required: true,
      placeholder: `Пароль`,
      clearable: true,
      maxlength: `100`,
      showPassword: true,
    },
  },
  {
    name: `delete`,
    value: `delete`,
    ref: `AccountDeleteBtn`,
    content: `BaseButton`,
    width: `70`,
    props: {
      symbolId: `delete`,
      fixed: 'right',
    },
  },
]

export const defaultAccountModel = {
  id: null,
  label: null,
  type: null,
  login: null,
  password: null,
}
