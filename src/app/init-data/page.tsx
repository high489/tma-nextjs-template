'use client'

import { useMemo } from 'react'
import {
  initDataRaw as _initDataRaw,
  initDataState as _initDataState,
  type User,
  useSignal,
} from '@telegram-apps/sdk-react'
import { List, Placeholder } from '@telegram-apps/telegram-ui'
import Image from 'next/image'

import {
  DisplayData,
  type DisplayDataRow,
  Page,
} from '@components'

function getUserRows(user: User): DisplayDataRow[] {
  return Object.entries(user).map(([title, value]) => ({ title, value }))
}

export default function InitDataPage() {
  const initDataRaw = useSignal(_initDataRaw)
  const initDataState = useSignal(_initDataState)

  const initDataRows = useMemo<DisplayDataRow[] | undefined>(() => {
    if (!initDataState || !initDataRaw) {
      return
    }
    return [
      { title: 'raw', value: initDataRaw },
      ...Object.entries(initDataState).reduce<DisplayDataRow[]>(
        (acc, [title, value]) => {
          if (value instanceof Date) {
            acc.push({ title, value: value.toISOString() })
          } else if (!value || typeof value !== 'object') {
            acc.push({ title, value })
          }
          return acc
        },
        [],
      ),
    ]
  }, [initDataState, initDataRaw])

  const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initDataState && initDataState.user
      ? getUserRows(initDataState.user)
      : undefined
  }, [initDataState])

  const receiverRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initDataState && initDataState.receiver
      ? getUserRows(initDataState.receiver)
      : undefined
  }, [initDataState])

  const chatRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return !initDataState?.chat
      ? undefined
      : Object.entries(initDataState.chat).map(([title, value]) => ({
          title,
          value,
        }))
  }, [initDataState])

  if (!initDataRows) {
    return (
      <Page>
        <Placeholder
          header='Oops'
          description='Application was launched with missing init data'
        >
          <Image
            alt='Telegram sticker'
            src='https://xelene.me/telegram.gif'
            width={144}
            height={144}
            style={{ display: 'block' }}
          />
        </Placeholder>
      </Page>
    )
  }
  return (
    <Page>
      <List>
        <DisplayData header={'Init Data'} rows={initDataRows} />
        {userRows && <DisplayData header={'User'} rows={userRows} />}
        {receiverRows && (
          <DisplayData header={'Receiver'} rows={receiverRows} />
        )}
        {chatRows && <DisplayData header={'Chat'} rows={chatRows} />}
      </List>
    </Page>
  )
}