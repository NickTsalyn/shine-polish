'use server'

import { cookies } from 'next/headers'

export default async function setLangValue(value: string) {
    cookies().set('lang', value)
}