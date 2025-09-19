
'use client'
import {Input} from "@heroui/input";
import {Button} from "@heroui/react";
import { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import { ThemeToggle } from "./theme-toggle";

const Todo = () => {
    
    const[inputValue, setInputValue] = useState<string>("")
    const[todo, setTodo] = useState<string[]>([])
    const[time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleDelete = (index:number) => {
        setTodo(todo.filter((todo, item)=> item !== index))
    }

    const addTodo = () => {
       if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue(""); // очистим поле после добавления
        }
    }

    return ( 
        <>
        <div className="flex flex-col w-full justify-center items-center">
        <ThemeToggle/>
        <h1 style={{textAlign:'center', fontSize:'30px', fontWeight:'700', marginTop:'20px'}} className="text-black dark:text-white">Todo List</h1>
             <div className="flex w-full justify-center items-center max-w-md flex-wrap md:flex-nowrap gap-4 mt-4">
                <Input label="Add your new todo" type="text" value={inputValue}
                onChange={handleInputChange}
                
               />
                <Button color="primary" onClick={addTodo} className="bg-blue-500 text-white dark:bg-white dark:text-black">
                    Add
                </Button>
            </div>
            <div>
            
                        {todo.map((todo, index) => (
                            todo &&  (
                                <>
                                <div key={index}>
                                    <Card key={index} style={{marginTop:'20px', width:"450px"}}>
                                        <CardBody style={{color:"grey", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                            {todo}
                                        
                                            <button style={{color:'red'}} onClick={() => handleDelete(index)}>
                                                    <Image
                                                        src="/remove.png"   
                                                        alt="Иконка галочки"
                                                        width={25}
                                                        height={25}
                                                    />
                                                </button>

                                        </CardBody>
                                    </Card>
                                    <div className="ml-4 text-xs text-gray-400 text-right">
                                                <p>{time.toLocaleDateString()}</p>
                                                <p>{time.toLocaleTimeString()}</p>
                                    </div>
                                    </div>
                                </>
                            )
                        ))}
            </div>
         </div>

        </>
     );
}
 
export default Todo;