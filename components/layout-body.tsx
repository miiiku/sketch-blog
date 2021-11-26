import type { ReactNode } from 'react';
import LayoutStyle from '../styles/Layout.module.css';

export default function LayoutBody({ title, children }: { title?: string, children: ReactNode }) {
  return (
    <div className={ LayoutStyle.layoutBody }>
      { title && <h1 className={ LayoutStyle.layoutTitle }>{ title }</h1> }
      { children }
    </div>
  )
}