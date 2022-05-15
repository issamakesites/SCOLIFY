import React, { Component} from 'react'
import { useParams } from 'react-router'
import EditEnfant from './editEnfant'


export default function ModifierEleve() {
  let params = useParams()
  return (
    <EditEnfant eleveid={params.eleveid}></EditEnfant>
  )
}
