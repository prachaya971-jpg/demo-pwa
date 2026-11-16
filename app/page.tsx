"use client";

import React, { useState } from "react";
import {
  Home as HomeIcon,
  Layers,
  Settings,
  Smartphone,
  Bell,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "home", label: "หน้าหลัก", icon: HomeIcon },
  { key: "items", label: "รายการ", icon: Layers },
  { key: "settings", label: "ตั้งค่า", icon: Settings },
] as const;

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "items" | "settings">("home");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Desktop / Tablet Sidebar (ซ่อนบนมือถือ, แสดงบนจอ md ขึ้นไป) */}
      <aside className="hidden md:flex md:w-64 lg:w-72 md:flex-col md:fixed md:inset-y-0 bg-slate-900 text-white p-5 z-40">
        <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-800">
          <div className="bg-indigo-500 p-2 rounded-xl">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-wide">My App Demo</h1>
            <p className="text-[11px] text-slate-400">Responsive PWA</p>
          </div>
        </div>

        <nav className="mt-6 flex-1 space-y-1.5">
          {NAV_ITEMS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="bg-slate-800/80 rounded-xl p-3.5 text-xs text-slate-300 leading-relaxed">
          รองรับการติดตั้งลงหน้าจอหลักทั้งบนมือถือและคอมพิวเตอร์
        </div>
      </aside>

      {/* Main Wrapper (เว้นระยะซ้ายบนจอ md ขึ้นไปเพื่อหลบ Sidebar) */}
      <div className="flex-1 flex flex-col md:pl-64 lg:pl-72 pb-20 md:pb-8">
        {/* Top Header */}
        <header className="bg-slate-900 md:bg-white text-white md:text-slate-900 p-5 md:px-8 md:py-4 rounded-b-3xl md:rounded-none shadow-md md:shadow-none md:border-b md:border-slate-200 flex justify-between items-center sticky top-0 z-30">
          <div>
            <p className="text-xs text-slate-400 md:text-slate-500">ยินดีต้อนรับ</p>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              {NAV_ITEMS.find((item) => item.key === activeTab)?.label}
            </h1>
          </div>

          <button className="bg-slate-800 md:bg-slate-100 p-2.5 rounded-full hover:bg-slate-700 md:hover:bg-slate-200 transition relative">
            <Bell className="w-5 h-5 text-slate-200 md:text-slate-700" />
            <span className="w-2 h-2 bg-rose-500 rounded-full absolute top-2 right-2"></span>
          </button>
        </header>

        {/* Content Container (จำกัดความกว้างสูงสุดบนจอใหญ่ให้อ่านง่าย) */}
        <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 space-y-6">
          {/* แถบแนะนำการติดตั้ง PWA (แสดงเฉพาะบนมือถือ) */}
          <div className="md:hidden bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3 shadow-sm">
            <div className="bg-slate-900 text-white p-2.5 rounded-xl shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-600 leading-relaxed">
              กด <b>"เพิ่มลงหน้าจอหลัก"</b> ในเมนูเบราว์เซอร์ เพื่อใช้งานแบบเต็มจอเหมือนแอปจริง
            </div>
          </div>

          {/* เนื้อหาเปลี่ยนตามแท็บที่เลือก */}
          {activeTab === "home" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-sm md:text-base text-slate-700 mb-3 px-1">
                  ภาพรวมระบบ (Dashboard)
                </h2>
                {/* Responsive Grid: มือถือ 2 คอลัมน์ -> จอใหญ่ 4 คอลัมน์ */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-400">รายการทั้งหมด</p>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">24</p>
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-400">รอดำเนินการ</p>
                    <p className="text-2xl md:text-3xl font-bold text-indigo-600 mt-1">5</p>
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-400">เสร็จสิ้นแล้ว</p>
                    <p className="text-2xl md:text-3xl font-bold text-emerald-600 mt-1">19</p>
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-400">ผู้ใช้งานวันนี้</p>
                    <p className="text-2xl md:text-3xl font-bold text-amber-600 mt-1">128</p>
                  </div>
                </div>
              </div>

              {/* รายการเมนูตัวอย่าง: มือถือเรียงลงมา -> จอใหญ่แบ่งเป็น 2 คอลัมน์ */}
              <div>
                <h2 className="font-semibold text-sm md:text-base text-slate-700 mb-3 px-1">
                  เมนูการทำงานด่วน
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { title: "ฟีเจอร์ตัวอย่างที่ 1", desc: "คำอธิบายสั้นๆ ของฟังก์ชันนี้" },
                    { title: "ฟีเจอร์ตัวอย่างที่ 2", desc: "คำอธิบายสั้นๆ ของฟังก์ชันนี้" },
                    { title: "ฟีเจอร์ตัวอย่างที่ 3", desc: "คำอธิบายสั้นๆ ของฟังก์ชันนี้" },
                    { title: "ฟีเจอร์ตัวอย่างที่ 4", desc: "คำอธิบายสั้นๆ ของฟังก์ชันนี้" },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-indigo-200 hover:shadow transition text-left"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "items" && (
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm text-center space-y-2">
              <Layers className="w-10 h-10 text-slate-400 mx-auto" />
              <h2 className="font-semibold text-base md:text-lg text-slate-800">หน้ารายการข้อมูล</h2>
              <p className="text-xs md:text-sm text-slate-500">
                พื้นที่สำหรับแสดงตารางข้อมูลหรือการ์ดรายการแบบเต็มหน้าจอ
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm text-center space-y-2">
              <Settings className="w-10 h-10 text-slate-400 mx-auto" />
              <h2 className="font-semibold text-base md:text-lg text-slate-800">ตั้งค่าระบบ</h2>
              <p className="text-xs md:text-sm text-slate-500">
                จัดการโปรไฟล์และการตั้งค่าแอปพลิเคชัน
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (แสดงเฉพาะบนมือถือ, ซ่อนบนจอ md ขึ้นไป) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2.5 flex justify-around items-center z-50">
        {NAV_ITEMS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-1 transition ${
                isActive ? "text-indigo-600 font-semibold" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[11px]">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}