import styles from './Input.module.css'
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>

export function Input({...rest}:Props){
    return (
        <input type="text" className={styles.container} placeholder='Adicionar nova tarefa' {...rest}/>
    )
}