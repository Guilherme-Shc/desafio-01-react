import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { PlusCircle } from 'phosphor-react'
import {ListHeader} from './components/List/ListHeader/ListHeader'
import {Item} from './components/List/Items/Item'
import {Empty} from './components/List/Empty/Empty'
import styles from './styles/App.module.css'
import { useState } from 'react'

export interface NewTask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<NewTask[]>([])

  const checkedTaskCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked){
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTask(){
    if(!inputValue){
      return
    }

    const newTask : NewTask ={
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

 function handleRemoveTask(id: number){
  const filteredTasks = tasks.filter((task) => task.id !== id)

  if(!confirm('A tarefa será apagada, tem certeza disso?')){
    return
  }

  setTasks(filteredTasks)
}

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id){
        return { ...task, isChecked: value}
      }

      return { ...task}
    })

    setTasks(updatedTasks)
  }


  return (
    <main>
      <Header/>

      <div className={styles.content}>
        <div className={styles.inputContainer}>
          <Input onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}/>
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="duotone" />
          </Button>
        </div>

        <div className={styles.listContainer}>
        <ListHeader 
          taskCounter={tasks.length} 
          checkedTaskCounter={checkedTaskCounter}
        />
        {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </div>

    </main>
  )
}

export default App
