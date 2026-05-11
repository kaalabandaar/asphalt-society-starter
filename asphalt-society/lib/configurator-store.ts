'use client';
import { create } from 'zustand';
type S={paint:string;lowering:number;tint:number;spoiler:boolean;carbon:boolean;wheels:string;set:(p:Partial<S>)=>void};
export const useConfig=create<S>((set)=>({paint:'#111318',lowering:0.15,tint:.35,spoiler:true,carbon:false,wheels:'forged',set:(p)=>set(p)}));
