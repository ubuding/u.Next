import { useSyncExternalStore } from 'react';

interface EIP6963ProviderInfo {
  rdns: string;
  uuid: string;
  name: string;
  icon: string;
}

type EIP6963AnnounceProviderEvent = {
  detail: {
    info: EIP6963ProviderInfo;
    provider: Readonly<EIP1193Provider>;
  };
};

interface EIP1193Provider {
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  send?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  request: (request: {
    method: string;
    params?: Array<unknown>;
  }) => Promise<string[]>;
}

const providers: Map<string, EIP1193Provider> = new Map();
const store = {
  value: () => providers,
  subscribe: (callback: () => void) => {
    function onAnnouncement(event: EIP6963AnnounceProviderEvent) {
      providers.set(event.detail.info.name, event.detail.provider);
      callback();
    }

    window.addEventListener('eip6963:announceProvider', onAnnouncement as any);
    window.dispatchEvent(new Event('eip6963:requestProvider'));
    return () =>
      window.removeEventListener(
        'eip6963:announceProvider',
        onAnnouncement as any
      );
  },
};

export default function useWallet() {
  return useSyncExternalStore(store.subscribe, store.value, store.value);
}

// 谷歌商店插件地址
export const walletLink = new Map([
  [
    'MetaMask',
    'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
  ],
  [
    'OKX Wallet',
    'https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
  ],
  [
    'Coinbase Wallet',
    'https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
  ],
]);
