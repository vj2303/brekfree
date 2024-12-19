"use client"
import React, { useState } from 'react'
import CreateContainer from './CreateContainer'
import Responses from './ResponsesContainer'
import ChatContainer from './ChatContainer'
import axios from 'axios'

const page = () => {
  const [currentPage, setCurrentPage] = useState("create")
  const [prompts, setPrompts] = useState([])
  const [selectedPrompt, setSelectedPrompt] = useState<String | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [prompt, setPrompt] = useState<Propmt>({
    content_type: "",
    audience_type: "",
    delivery_method: "",
    content_theme: "",
    target_industry: ""
  });

  // Handle dropdown changes
  const handleChange = (name, value) => {
    setPrompt({ ...prompt, [name]: value });
  };


  const handleGetPrompts = async(data) => {
    setIsLoading(true)
    setCurrentPage("res")
    try {
      const res = await axios({
        method: "post",
        baseURL: "http://3.88.13.99:8000",
        url: "/generate_prompts",
        data : data || prompt
      })
      setPrompts(res.data.prompts)
    } catch (error) {
      alert("Could not generate responses")
      setCurrentPage("create")
    } finally {
      setIsLoading(false)
    }
  }
  const handleSelectPrompt = (prompt: String) => {
    setSelectedPrompt(prompt)
    setCurrentPage("chat")
  }
  return (
    <>
     {
      currentPage === "create" ? <CreateContainer handleGetPrompts={handleGetPrompts} prompt={prompt} handleChange={handleChange} /> : currentPage === "res" ? <Responses prompts={prompts} handleSelectPrompt={handleSelectPrompt} isLoading={isLoading} prompt={prompt} handleChange={handleChange} handleGetPrompts={handleGetPrompts} /> : currentPage === "chat" && selectedPrompt && <ChatContainer selectedPrompt={selectedPrompt} />
     }
    </>
  )
}

export default page