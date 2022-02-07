import React from "react";
import {useState} from "react"
import './App.css'
import { Space, Input } from "antd";


const { Search } = Input;

export const App: React.FC = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setValue(value)
  }

  const handleSearch = () => {
    setValue('')
    console.log('value: ', value)
  }

  const onSearch = (value: any) => console.log(value);

  return (<div className="App">
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={handleSearch} enterButton value={value} onChange={handleChange}/>
      </Space>
    </div>
  )
}
