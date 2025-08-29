import { useState } from 'react'
import Layout from '../components/Layout'

export default function BeatYourBill(){
  const [f,setF]=useState({name:'',email:'',provider:'',price:''})
  function submit(e){
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${f.name}\nEmail: ${f.email}\nProvider: ${f.provider}\nPrice: ${f.price}`
    )
    window.location.href = `mailto:josh@islandwave.ca?subject=Beat Your Bill&body=${body}`
  }
  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Beat Your Bill</h1>
    <form className="grid md:grid-cols-2 gap-3 card" onSubmit={submit}>
      <div><label className="text-sm">Name</label><input className="input" required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></div>
      <div><label className="text-sm">Email</label><input className="input" type="email" required value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></div>
      <div><label className="text-sm">Current Provider</label><input className="input" value={f.provider} onChange={e=>setF({...f,provider:e.target.value})}/></div>
      <div><label className="text-sm">Monthly Price (CAD)</label><input className="input" value={f.price} onChange={e=>setF({...f,price:e.target.value})}/></div>
      <div className="md:col-span-2"><button className="btn btn-primary">Email Details</button></div>
    </form>
    <div className="text-slate-700 mt-3">Prefer attachments? Email us directly: <a className="underline" href="mailto:josh@islandwave.ca?subject=Beat Your Bill">josh@islandwave.ca</a></div>
  </Layout>)
}
