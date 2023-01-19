import {useState} from 'react';

function getValue() {
    //alert('hola, probando');
    return 5;
}

export default function MyComponent() {
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor');
    const [todos, setTodos] = useState(() => getValue());

    console.log(todos);

    return (
        <button onClick={() => {alert(todos)}}>{todos}</button>
    );
}