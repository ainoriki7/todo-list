
'use client'
import {Input} from "@heroui/input";
import {Button} from "@heroui/react";
import { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

const Todo = () => {
    
    const[inputValue, setInputValue] = useState<string>("")
    const[todo, setTodo] = useState<string[]>([])

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
            <div className="flex flex-row justify-center items-center gap-4">
                <h1 style={{textAlign:'center', fontSize:'30px', color:'#000', fontWeight:'700', marginTop:'20px'}}>Todo List</h1>
                <Image
                                                    src="/check.png"   
                                                    alt="Иконка галочки"
                                                    width={25}
                                                    height={25}
                                                />
            </div>
                <div className="flex w-full justify-center items-center max-w-md flex-wrap md:flex-nowrap gap-4 mt-4">
                    <Input label="Add your new todo" type="text" value={inputValue}
                    onChange={handleInputChange}
                />
                    <Button color="primary" onClick={addTodo}>
                        Add
                    </Button>
                </div>
            <div>
            
                        {todo.map((todo, index) => (
                            todo &&  (
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
                            )
 
                        ))}
                    
              
               
            </div>
         </div>

        </>
     );
}
 
export default Todo;