import type { ReactNode } from 'react';
import dynamic from 'next/dynamic'
import LayoutHeader from './layout-header';
import LayoutAnalytics from './layout-analytics';

import LayoutStyle from '../styles/Layout.module.css';

const isProduction = process.env.NODE_ENV === 'production';

const DynamicCompoenetWithNoSSRBG = dynamic(
  () => import('./layout-bg'),
  { ssr: false }
)

const DynamicComponentWithNoSSRFooter = dynamic(
  () => import('./layout-footer'),
  { ssr: false }
)

export default function Layout({ title, children }: { title?: string, children: ReactNode }) {
  return (
    <div className={ LayoutStyle.layout }>
      <DynamicCompoenetWithNoSSRBG />
      <LayoutHeader />
      { children }
      <DynamicComponentWithNoSSRFooter />
      { isProduction && <LayoutAnalytics /> }
    </div>
  )
}