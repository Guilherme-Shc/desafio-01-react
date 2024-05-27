import { Trash, Check } from 'phosphor-react'

import { NewTask } from '../../../App'

import styles from './Item.module.css'

interface Props {
  data: NewTask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props){
   
    function handleTaskToggle(){
        toggleTaskStatus({ 
            id:data.id,
            value: !data.isChecked
        })
    }

    function handleRemove(){
        removeTask(data.id)
    }

    const checkboxIsChecked = data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphIsChecked = data.isChecked
        ? styles['paragraph-checked']
        : ''

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.isChecked}/>
                    <span className={`${styles.checkbox} ${checkboxIsChecked}`}>
                        {data.isChecked && <Check size={12}/>}
                    </span>
                    <p className={`${styles.paragraph} ${paragraphIsChecked}`}>
                        {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={24} color="white"/>
            </button>
        </div>
    )
}