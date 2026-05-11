import { NextResponse } from 'next/server';import { prisma } from '@/lib/prisma';
export async function GET(){const builds=await prisma.build.findMany({take:24,orderBy:{createdAt:'desc'}});return NextResponse.json(builds)}
export async function POST(req:Request){const body=await req.json();const build=await prisma.build.create({data:{name:body.name,vehicle:body.vehicle,config:body.config,userId:body.userId}});return NextResponse.json(build)}
