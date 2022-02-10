import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import { GenreIdProvider } from './hooks/useGenre'

export function App() {

  return (
    <GenreIdProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GenreIdProvider >
  )
}