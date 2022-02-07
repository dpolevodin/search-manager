import React from "react";
import { useStore } from 'effector-react';
import './App.css'
import { Space, Input } from "antd";
import {$search, searchChanged, searchButtonClicked} from './store/search'


const { Search } = Input;

export const App: React.FC = () => {
  const search = useStore($search)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    searchChanged(value)
  }

  const handleSearch = () => {
    searchButtonClicked()
  }

  const onSearch = (value: any) => console.log(value);

  return (<div className="App">
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={handleSearch} enterButton value={search} onChange={handleChange}/>
      </Space>
    </div>
  )
}
