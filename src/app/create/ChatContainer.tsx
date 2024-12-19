"use client"
import Button from '@/components/UI/Button';
import Loader from '@/components/UI/Loader'; // Import the Loader component
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { saveAs } from 'file-saver'; // Import file-saver for downloading files
import { Document, Packer, Paragraph, TextRun } from "docx"; // Import docx library for Word document generation

type ChatBoxProps = {
  userName: String;
  img: String;
  message: String;
  isPrompt: Boolean | undefined;
  isMarkdown: Boolean | undefined; // New property to identify markdown
}

type Chat = {
  prompt: String;
  response: String;
}

type MessengerInputProps = {
  handleAddPrompt: (text: String) => void;
}

export default function ChatContainer({ selectedPrompt }: { selectedPrompt: string }) {
  const [chat, setChat] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto"
    });
  }, [chat]);

  useEffect(() => {
    handleAddPrompt(selectedPrompt);
  }, []);

  const handleAddPrompt = async (text: String) => {
    setChat([...chat, { prompt: text, response: "" }]);
    setLoading(true); // Set loading to true when starting the API call
    try {
      const res = await axios({
        method: "post",
        baseURL: "http://3.88.13.99:8000",
        url: "/ask-gemini",
        data: {
          prompt: text
        }
      });
      setChat([...chat, { prompt: text, response: res.data.response }]);
    } catch (error) {
      setChat([...chat, { prompt: text, response: "Could not load response" }]);
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false when API call is complete
    }
  };

  const handleDownloadResponse = async (response: string) => {
    try {
      const doc = new Document({
        sections: [
          {
            children: response.split("\n").map((line) => {
              return new Paragraph({
                children: [
                  new TextRun({
                    text: line.replace(/[*_`]/g, ""), // Strip Markdown characters
                    bold: line.startsWith("**"), // Bold for Markdown `**`
                    italics: line.startsWith("_"), // Italic for Markdown `_`
                    break: 1,
                  }),
                ],
              });
            }),
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, "response.docx");
      console.log("Document created successfully");
    } catch (error) {
      console.error("Error generating the document:", error);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto py-[42px] px-[10px]'>
      {chat.map((ele, i) => (
        <div key={i} className='flex flex-col gap-[30px] mb-[90px]'>
          <ChatBox message={ele.prompt} userName={"User"} img={"/dummyAvatar.jpg"} isPrompt={true} isMarkdown={false} />
          <ChatBox message={ele.response} userName={"AI response"} img={"/dummyAvatar.jpg"} isPrompt={false} isMarkdown={true} />
          {ele.response && (
            <button
              onClick={() => handleDownloadResponse(ele.response.toString())}
              className='mt-2 p-2 bg-blue-500 text-white rounded-md'>
              Download Response
            </button>
          )}
        </div>
      ))}
      {loading && <Loader />} {/* Show the Loader while loading */}
      <MessengerInput handleAddPrompt={handleAddPrompt} />
    </div>
  );
}

const ChatBox = ({ userName, message, img, isPrompt, isMarkdown }: ChatBoxProps) => {
  return (
    <div className={`flex items-start gap-[10px] p-[10px] rounded-[20px] ${isPrompt ? "bg-light-purple" : ""}`}>
      <Image width={50} height={50} src={img.toString()} alt='user' className='rounded-full' />
      <span>
        <p className='font-bold text-xl'>{userName}</p>
        {isMarkdown ? (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{message.toString()}</ReactMarkdown>
        ) : (
          <p className='text-[16px]'>{message}</p>
        )}
      </span>
    </div>
  );
};

const MessengerInput = ({ handleAddPrompt }: MessengerInputProps) => {
  const [message, setMessage] = useState("");

  const handleAskGemini = () => {
    setMessage("");
    handleAddPrompt(message);
  };

  return (
    <label htmlFor="messenger" className='border-[1px] border-gray-500 rounded-lg p-2 flex gap-2 fixed bottom-5 w-[80%] z-10 bg-[#ffffff] '>
      <input
        type="text"
        name='messenger'
        id='messenger'
        className='outline-none flex-grow'
        value={message}
        placeholder='Type your text here'
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button bg={"dark-blue"} text='white' size={"sm"} onClick={handleAskGemini}>
        <Image width={20} height={20} alt='send' src={"/Vector.png"} />
      </Button>
    </label>
  );
};
