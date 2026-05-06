"use client";

import { courseUnits } from "@/data/units";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play, LayoutTemplate, Terminal } from "lucide-react";
import { usePathname } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { use, useState } from "react";

const GuiSimulator = ({ type, topic }: { type: string, topic: any }) => {
  const [spinValue, setSpinValue] = useState(0);
  const [radioSelected, setRadioSelected] = useState("Python");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [listSelected, setListSelected] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const listItems = topic.title.includes("Scrollbar") 
    ? Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)
    : ["Reading", "Gaming", "Coding", "Sports", "Music", "Traveling", "Drawing"];

  switch (type) {
    case 'canvas':
      return (
        <div className="w-[300px] h-[250px] bg-white mx-auto relative flex items-center justify-center shadow-inner overflow-hidden border border-slate-300">
           <svg height="250" width="300" className="absolute top-0 left-0">
             <rect x="20" y="20" width="130" height="80" fill="#add8e6" stroke="black" />
             <circle cx="235" cy="85" r="65" fill="yellow" stroke="black" />
             <path d="M 170 20 A 30 30 0 0 1 230 80" fill="red" stroke="black" strokeWidth="2" />
             <line x1="50" y1="150" x2="350" y2="150" stroke="black" strokeWidth="2" />
             <text x="200" y="210" textAnchor="middle" fill="blue" fontSize="14" fontFamily="Arial">Canvas Drawing Example</text>
           </svg>
        </div>
      );
    case 'grid':
      return (
        <div className="w-full max-w-[250px] mx-auto bg-[#f0f0f0] p-4 text-black text-[13px] border border-slate-400 shadow-sm">
          <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-2 items-center">
            <label className="text-right">Username:</label>
            <input className="border border-slate-400 px-1 bg-white" placeholder="admin" />
            <label className="text-right">Password:</label>
            <input className="border border-slate-400 px-1 bg-white" type="password" placeholder="****" />
          </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-slate-200 border border-slate-400 px-4 py-1 shadow-sm active:bg-slate-300 transition-colors">Submit</button>
          </div>
        </div>
      );
    case 'place':
      return (
        <div className="w-[350px] max-w-full h-[200px] bg-[#f0f0f0] mx-auto relative border border-slate-400 shadow-sm">
           <div className="absolute left-[50px] top-[50px] text-[13px] text-black">Fixed at X,Y</div>
           <button className="absolute left-[200px] top-[140px] bg-slate-200 border border-slate-400 px-4 py-1 text-[13px] hover:bg-slate-300">Bottom Right</button>
        </div>
      );
    case 'pack':
      return (
        <div className="w-full max-w-[300px] h-[200px] mx-auto bg-white border border-slate-400 flex flex-col">
          <div className="bg-slate-200 p-2 text-center border-b border-slate-300 text-black text-sm font-medium">Top (fill='x')</div>
          <div className="flex-1 flex overflow-hidden">
            <div className="bg-slate-100 w-16 flex items-center justify-center border-r border-slate-300 text-black text-sm [writing-mode:vertical-lr] font-medium">Left</div>
            <div className="flex-1 flex items-center justify-center text-slate-400 text-xs italic bg-slate-50">Main Content</div>
          </div>
          <div className="bg-slate-200 p-2 text-center border-t border-slate-300 text-black text-sm font-medium">Bottom</div>
        </div>
      );
    case 'spinbox':
      return (
        <div className="w-[200px] h-[100px] bg-[#f0f0f0] mx-auto flex items-center justify-center border border-slate-400 shadow-sm text-black">
           <div className="flex border border-slate-400 bg-white h-[26px] items-center">
             <div className="w-16 px-2 text-[14px]">{spinValue}</div>
             <div className="flex flex-col border-l border-slate-400 bg-[#e0e0e0] w-5 h-full">
               <button 
                onClick={() => setSpinValue(v => v + 1)}
                className="h-1/2 flex items-center justify-center text-[10px] border-b border-slate-400 hover:bg-slate-300 active:bg-slate-400"
               >▲</button>
               <button 
                onClick={() => setSpinValue(v => v - 1)}
                className="h-1/2 flex items-center justify-center text-[10px] hover:bg-slate-300 active:bg-slate-400"
               >▼</button>
             </div>
           </div>
        </div>
      );
    case 'listbox':
      return (
        <div className="w-[240px] h-[160px] bg-[#f0f0f0] mx-auto flex border border-slate-400 text-black">
          <div className="flex-1 bg-white overflow-y-auto m-[2px] flex flex-col border border-slate-400 border-r-0 scrollbar-thin scrollbar-thumb-slate-300">
            {listItems.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setListSelected(i)}
                className={`px-2 py-[2px] text-[13px] cursor-default whitespace-nowrap ${listSelected === i ? 'bg-[#0078d7] text-white' : 'hover:bg-slate-100'}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="w-[18px] bg-[#f0f0f0] flex flex-col border border-slate-400 m-[2px] ml-0">
             <button className="h-4 bg-[#e0e0e0] border border-slate-300 shadow-sm flex items-center justify-center text-[8px] active:bg-slate-300">▲</button>
             <div className="flex-1 bg-[#e8e8e8] p-[1px] shadow-inner relative">
               <div className="w-full h-8 bg-[#cdcdcd] rounded-sm absolute top-4"></div>
             </div>
             <button className="h-4 bg-[#e0e0e0] border border-slate-300 shadow-sm flex items-center justify-center text-[8px] active:bg-slate-300">▼</button>
          </div>
        </div>
      );
    case 'menu':
      return (
        <div className="w-full max-w-[400px] h-[250px] mx-auto bg-white border border-slate-400 flex flex-col text-black font-sans relative">
          <div className="flex bg-[#f0f0f0] px-1 text-[12px] border-b border-slate-300">
             <div 
              onClick={() => setOpenMenu(openMenu === 'file' ? null : 'file')}
              className={`px-3 py-1 cursor-pointer ${openMenu === 'file' ? 'bg-[#91c9f7]' : 'hover:bg-[#91c9f7]'}`}
             >File</div>
             <div 
              onClick={() => setOpenMenu(openMenu === 'edit' ? null : 'edit')}
              className={`px-3 py-1 cursor-pointer ${openMenu === 'edit' ? 'bg-[#91c9f7]' : 'hover:bg-[#91c9f7]'}`}
             >Edit</div>
             <div 
              onClick={() => setOpenMenu(openMenu === 'help' ? null : 'help')}
              className={`px-3 py-1 cursor-pointer ${openMenu === 'help' ? 'bg-[#91c9f7]' : 'hover:bg-[#91c9f7]'}`}
             >Help</div>
          </div>
          <div className="flex-1 relative">
            {openMenu === 'file' && (
              <div className="absolute top-0 left-0 bg-white shadow-lg border border-slate-300 py-1 w-32 z-10 animate-in fade-in slide-in-from-top-1 duration-100">
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">New</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Open</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Save</div>
                <div className="border-t border-slate-200 my-1"></div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Exit</div>
              </div>
            )}
            {openMenu === 'edit' && (
              <div className="absolute top-0 left-12 bg-white shadow-lg border border-slate-300 py-1 w-32 z-10 animate-in fade-in slide-in-from-top-1 duration-100">
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Undo</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Redo</div>
                <div className="border-t border-slate-200 my-1"></div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Cut</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Copy</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">Paste</div>
              </div>
            )}
            {openMenu === 'help' && (
              <div className="absolute top-0 left-24 bg-white shadow-lg border border-slate-300 py-1 w-32 z-10 animate-in fade-in slide-in-from-top-1 duration-100">
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">View Help</div>
                <div onClick={() => setOpenMenu(null)} className="px-4 py-1 hover:bg-[#0078d7] hover:text-white text-[12px] cursor-default">About</div>
              </div>
            )}
            <div className="flex items-center justify-center h-full text-slate-400 italic text-sm select-none">
              Click on the menu items above to see dropdowns
            </div>
          </div>
        </div>
      );
    case 'radio':
      return (
        <div className="w-full max-w-[300px] mx-auto bg-[#f0f0f0] p-6 border border-slate-400 text-black shadow-sm">
          <div className="font-bold mb-3 text-sm">Select Programming Language:</div>
          <div className="space-y-2">
            {[ "Python", "Java", "C++", "JavaScript" ].map((lang) => (
              <label key={lang} onClick={() => setRadioSelected(lang)} className="flex items-center space-x-2 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center bg-white">
                  {radioSelected === lang && <div className="w-2 h-2 rounded-full bg-slate-800"></div>}
                </div>
                <span className="text-sm">{lang}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center">
            <button className="bg-blue-600 text-white px-6 py-1 rounded text-sm hover:bg-blue-700 transition-colors">Submit</button>
            <div className="mt-2 text-xs text-blue-600 font-medium h-4">
              {radioSelected && `Selected: ${radioSelected}`}
            </div>
          </div>
        </div>
      );
    case 'form':
      return (
        <div className="w-full max-w-[320px] mx-auto bg-[#f0f0f0] p-6 border border-slate-400 text-black shadow-sm">
          <div className="text-center font-bold text-lg mb-6">Registration Form</div>
          {formSubmitted ? (
            <div className="bg-green-100 border border-green-200 p-4 rounded text-center">
              <div className="text-green-800 font-bold mb-1">Registration Successful!</div>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-blue-600 underline"
              >Back to form</button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="text-sm mb-1">Full Name:</div>
                <input className="w-full border border-slate-400 px-2 py-1 bg-white text-sm outline-none focus:border-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <div className="text-sm mb-1">Email:</div>
                <input className="w-full border border-slate-400 px-2 py-1 bg-white text-sm outline-none focus:border-blue-500" placeholder="john@example.com" />
              </div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-3 h-3 cursor-pointer" />
                <span className="text-xs">I agree to Terms & Conditions</span>
              </label>
              <div className="flex flex-col space-y-2 pt-2">
                <button 
                  onClick={() => setFormSubmitted(true)}
                  className="w-full bg-green-600 text-white py-1.5 rounded text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
                >Register</button>
                <button className="w-full bg-slate-200 border border-slate-400 py-1.5 rounded text-sm hover:bg-slate-300 transition-colors">Reset</button>
              </div>
            </div>
          )}
        </div>
      );
    case 'text':
      return (
        <div className="w-full max-w-[400px] mx-auto bg-[#f0f0f0] p-4 border border-slate-400 text-black">
          <div className="text-sm mb-2 font-medium">Notes Editor:</div>
          <div className="flex border border-slate-400 bg-white">
            <textarea 
              className="flex-1 h-32 p-3 bg-yellow-50 outline-none text-sm resize-none scrollbar-thin overflow-y-auto" 
              placeholder="Type your notes here..."
            ></textarea>
            <div className="w-[18px] bg-[#f0f0f0] border-l border-slate-400 flex flex-col">
               <button className="h-4 flex items-center justify-center text-[8px] border-b border-slate-300 active:bg-slate-300">▲</button>
               <div className="flex-1 bg-[#e8e8e8] flex justify-center pt-2">
                 <div className="w-3 h-12 bg-[#cdcdcd] rounded-sm"></div>
               </div>
               <button className="h-4 flex items-center justify-center text-[8px] border-t border-slate-300 active:bg-slate-300">▼</button>
            </div>
          </div>
          <button className="mt-3 bg-blue-600 text-white px-5 py-1 text-sm hover:bg-blue-700 transition-colors shadow-sm">Save Notes</button>
        </div>
      );
    case 'frame':
      return (
        <div className="w-full max-w-[400px] h-[250px] mx-auto bg-slate-100 border border-slate-400 flex flex-col p-2 space-y-2 text-black">
          <div className="bg-blue-100 border border-blue-200 p-2 text-center font-bold h-12 flex items-center justify-center shadow-sm">Header Section</div>
          <div className="flex-1 bg-white border border-slate-200 flex items-center justify-center italic text-slate-400 text-sm shadow-inner">Main Content Area</div>
          <div className="bg-slate-200 border border-slate-300 p-2 flex space-x-2 shadow-sm">
            <button className="bg-green-600 text-white px-3 py-1 text-xs rounded hover:bg-green-700">Submit</button>
            <button className="bg-red-600 text-white px-3 py-1 text-xs rounded hover:bg-red-700">Cancel</button>
            <button className="bg-orange-500 text-white px-3 py-1 text-xs rounded hover:bg-orange-600">Help</button>
          </div>
        </div>
      );
    case 'paned':
      return (
        <div className="w-full max-w-[400px] h-[200px] mx-auto flex bg-[#e0e0e0] border border-slate-400 shadow-md text-black overflow-hidden font-sans text-sm">
           <div className="w-1/3 hover:bg-[#d0d0d0] border-r-2 border-slate-300 cursor-col-resize flex items-center justify-center p-2 text-center break-words select-none">
              Left Pane
           </div>
           <div className="flex-1 flex flex-col">
              <div className="h-1/2 hover:bg-[#d0d0d0] border-b-2 border-slate-300 cursor-row-resize flex items-center justify-center select-none">
                 Top Pane
              </div>
              <div className="flex-1 flex items-center justify-center select-none">
                 Bottom Pane
              </div>
           </div>
        </div>
      );
    default:
      const windowTitle = topic.code?.includes("root.title") 
        ? topic.code.match(/root\.title\(['"](.*?)['"]\)/)?.[1] || "Tkinter Application"
        : "Tkinter Application";
        
      return (
        <div className="w-full max-w-[320px] h-[180px] mx-auto bg-[#f0f0f0] border border-slate-400 shadow-md flex flex-col text-black rounded-sm overflow-hidden">
          <div className="bg-white px-2 py-1 border-b border-slate-300 flex items-center space-x-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="py" className="w-3 h-3" />
            <span className="text-[11px] font-sans">{windowTitle}</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="text-[12px] text-slate-600 mb-4 font-sans text-center">
              Welcome to your first Tkinter Application!<br/>
              Size: {topic.code?.match(/root\.geometry\(['"](.*?)['"]\)/)?.[1] || 'Default'}
            </div>
            <div className="flex space-x-2">
              <button className="bg-[#e1e1e1] border border-[#adadad] px-6 py-[2px] text-[12px] hover:bg-[#e5f1fb] hover:border-[#0078d7]">OK</button>
              <button className="bg-[#e1e1e1] border border-[#adadad] px-4 py-[2px] text-[12px] hover:bg-[#e5f1fb] hover:border-[#0078d7]">Cancel</button>
            </div>
          </div>
        </div>
      );
  }
};

function TopicCard({ topic, index, unitId }: { topic: any, index: number, unitId: string }) {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleSimulate = () => {
    if (showOutput) {
      setShowOutput(false);
      return;
    }
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 800); // 800ms simulation delay
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{topic.title}</h2>
        <div className="prose prose-slate max-w-none mb-6">
          <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap">{topic.content}</p>
        </div>

        {topic.code && (
          <div className="mt-8">
            <div className="flex items-center justify-between bg-slate-800 text-slate-200 px-4 py-2 rounded-t-lg">
              <div className="flex items-center">
                <LayoutTemplate className="w-4 h-4 mr-2" /> Code Example
              </div>
              <button 
                onClick={handleSimulate}
                className="flex items-center bg-blue-600 hover:bg-blue-500 transition-colors px-3 py-1 rounded text-sm font-semibold text-white"
              >
                {isRunning ? (
                  <span className="flex items-center">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-3 h-3 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Running...
                  </span>
                ) : showOutput ? (
                  "Hide Output"
                ) : (
                  <>
                    <Play className="w-3 h-3 mr-1" /> Run Code
                  </>
                )}
              </button>
            </div>
            <SyntaxHighlighter
              language="python"
              style={vs}
              customStyle={{ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: "#f1f5f9" }}
            >
              {topic.code}
            </SyntaxHighlighter>
          </div>
        )}

        <AnimatePresence>
          {showOutput && (
            (unitId === "5" || topic.title.includes("Tkinter") || topic.output?.includes("Simulator:")) ? (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 bg-[#f0f0f0] rounded-md overflow-hidden border border-slate-400 shadow-xl"
              >
                {/* Windows 10 style Title Bar */}
                <div className="bg-white flex items-center justify-between px-3 py-[6px] border-b border-slate-300 select-none">
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="py" className="w-4 h-4" />
                    <span className="text-[12px] font-sans text-black tracking-normal">tk</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-[30px] h-[16px] hover:bg-slate-200 flex items-center justify-center text-black font-thin text-[10px]">_</div>
                    <div className="w-[30px] h-[16px] hover:bg-slate-200 flex items-center justify-center text-black font-thin text-[10px]">□</div>
                    <div className="w-[45px] h-[16px] hover:bg-red-500 hover:text-white flex items-center justify-center text-black font-thin text-[10px]">✕</div>
                  </div>
                </div>
                {/* Content rendering */}
                <div className="p-8 bg-[#f0f0f0] overflow-x-auto">
                  <GuiSimulator 
                    topic={topic}
                    type={
                      topic.title.includes("Canvas") ? "canvas" :
                      topic.title.includes("Grid") ? "grid" :
                      topic.title.includes("Place") ? "place" :
                      topic.title.includes("pack") ? "pack" :
                      topic.title.includes("Spinbox") ? "spinbox" :
                      topic.title.includes("Scrollbar") ? "listbox" :
                      topic.title.includes("Listbox") ? "listbox" :
                      topic.title.includes("Menu") ? "menu" :
                      topic.title.includes("Radio") ? "radio" :
                      topic.title.includes("Form") ? "form" :
                      topic.title.includes("Text") ? "text" :
                      topic.title.includes("Frame") ? "frame" :
                      topic.title.includes("Paned") ? "paned" : "unknown"
                    }
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-slate-900 rounded-lg overflow-hidden"
              >
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center text-green-400 text-xs font-bold uppercase tracking-wider">
                  <Terminal className="w-4 h-4 mr-2" /> Output Terminal
                </div>
                <div className="p-6">
                  <motion.pre 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-green-400 font-mono text-sm whitespace-pre-wrap"
                  >
                    {topic.output}
                  </motion.pre>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function UnitPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const unit = courseUnits.find(u => u.id === resolvedParams.id);

  if (!unit) return <div className="p-20 text-center text-3xl font-bold">Unit not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 lg:px-24">
      <Link href="/">
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center text-blue-600 mb-8 font-semibold hover:text-blue-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Sections
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">{unit.title}</h1>
        <p className="text-xl text-slate-600 border-l-4 border-blue-500 pl-4">{unit.description}</p>
      </motion.div>

      <div className="space-y-12">
        {unit.topics.map((topic, index) => (
          <TopicCard key={index} topic={topic} index={index} unitId={unit.id} />
        ))}
      </div>
    </div>
  );
}