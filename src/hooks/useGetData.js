

import json from '../fields.json'

import React, { useState } from 'react'
export default function useGetData(){
  const [state, setState] = useState(json.fields)

  const handdleAdd = (newItem) => {
    setState([...state, newItem ])
  }
  const handdleRemove = (labelF, componentF) => {
    const newArray = arary.find(({component, label}) => {
      if(component && label === labelF, componentF){
        return 
      }
      return e
    })
    setState(newArray)
  }
  return { state, handdleAdd, handdleRemove }
  }
