import Image from 'next/image'
import styles from './page.module.css'
import { fetchCompletion } from '@/data-access'
import { Dialog } from '@/components/dialog/dialog'

export default function Home() {
  return (
    <main className={styles.main}>
      <Dialog />
    </main>
  )
}
