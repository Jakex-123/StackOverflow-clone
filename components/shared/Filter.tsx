import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { HomePageFilters } from "@/constants/filters"
  
import React from 'react'

const Filter = () => {
  return (
    <div className="relative hidden max-md:flex">
    <Select>
      <SelectTrigger className="background-light800_dark300 border-slate-200 min-h-[56px]  border shadow-sm dark:border-slate-800 dark:text-white dark:shadow-none
      sm:w-[170px]
       ">
        <SelectValue  placeholder="Select a Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {HomePageFilters.map((filter)=>{
           return <SelectItem className="active:background-light800_dark300 dark:text-white " value={filter.value} key={filter.value}>{filter.name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default Filter