"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Code, Layers, Layout, AlertCircle } from "lucide-react";

export default function Home() {
  const units = [
    {
      id: "1",
      title: "Unit 1: Basic Python",
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      id: "2",
      title: "Unit 2: Control & Data",
      icon: Layers,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      id: "3",
      title: "Unit 3: Functions",
      icon: Code,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      id: "4",
      title: "Unit 4: Exceptions & Files",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      id: "5",
      title: "Unit 5: Tkinter UI",
      icon: Layout,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6 drop-shadow-sm">
          Interactive Python Academy
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Master Python from the basics up to GUI programming with Tkinter. Your
          complete unit-wise learning hub.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {units.map((unit) => {
          const Icon = unit.icon;
          return (
            <Link href={`/units/${unit.id}`} key={unit.id}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200 cursor-pointer border border-slate-100 flex flex-col items-center text-center h-full perspective-1000 transform-gpu"
              >
                <div className={`p-4 rounded-full ${unit.bg} mb-6`}>
                  <Icon className={`w-10 h-10 ${unit.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {unit.title}
                </h2>
                <p className="mt-4 text-slate-500 font-medium">
                  Explore modules, notes, and code execution.
                </p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
