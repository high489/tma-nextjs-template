'use client'

import styles from './page.module.scss'

import { openLink } from '@telegram-apps/sdk-react'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import {
  Avatar,
  Cell,
  List,
  Navigation,
  Placeholder,
  Section,
  Text,
  Title,
} from '@telegram-apps/telegram-ui'

import { DisplayData, Page } from '@components'

export default function TONConnectPage() {
  const wallet = useTonWallet()

  if (!wallet) {
    return (
      <Page>
        <Placeholder
          className={styles['placeholder']}
          header='TON Connect'
          description={
            <>
              <Text>
                To display the data related to the TON Connect, it is required
                to connect your wallet
              </Text>
              <TonConnectButton className={styles['button']} />
            </>
          }
        />
      </Page>
    )
  }

  const {
    account: { chain, publicKey, address },
    device: { appName, appVersion, maxProtocolVersion, platform, features },
  } = wallet

  return (
    <Page>
      <List>
        {'imageUrl' in wallet && (
          <>
            <Section>
              <Cell
                before={
                  <Avatar
                    src={wallet.imageUrl}
                    alt='Provider logo'
                    width={60}
                    height={60}
                  />
                }
                after={<Navigation>About wallet</Navigation>}
                subtitle={wallet.appName}
                onClick={(e) => {
                  e.preventDefault()
                  openLink(wallet.aboutUrl)
                }}
              >
                <Title level='3'>{wallet.name}</Title>
              </Cell>
            </Section>
            <TonConnectButton className={styles['button-connected']} />
          </>
        )}
        <DisplayData
          header='Account'
          rows={[
            { title: 'Address', value: address },
            { title: 'Chain', value: chain },
            { title: 'Public Key', value: publicKey },
          ]}
        />
        <DisplayData
          header='Device'
          rows={[
            { title: 'App Name', value: appName },
            { title: 'App Version', value: appVersion },
            { title: 'Max Protocol Version', value: maxProtocolVersion },
            { title: 'Platform', value: platform },
            {
              title: 'Features',
              value: features
                .map((f) => (typeof f === 'object' ? f.name : undefined))
                .filter((v) => v)
                .join(', '),
            },
          ]}
        />
      </List>
    </Page>
  )
}