import styles from './Empty.module.css'
import { ClipboardText } from 'phosphor-react'
export function Empty(){
    return(
        <div className={styles.container}>
            <ClipboardText size={48} />
            <p><strong>Você ainda não possui nenuma tarefa adicionada</strong> Crie sua primeira tarefa para organizar seus afazeres</p>
        </div>
    )
}