
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import {  SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Valderez</h2>
        <p>Domingo, 25 de agosto</p>

        <div className="flex items-center gap-2 mt-4">
        <Input placeholder="Faça sua buscar.."/>
        <Button>
          <SearchIcon/>
        </Button>
        </div>

        <div className="relative w-full h-[150px]" >
        <Image alt="Agende nos melhores salão" src="/banner-01.png" fill className="rounded-xl object-cover"/>
        </div>

        <Card className="mt-6" >
          <CardContent className="flex" >
            <div className="flex flex-col gap-2 py-5">

              <Badge className="w-fit" >Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6" >
                  <AvatarImage
                  src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"/>
                </Avatar>
                <p className="text-sm" >Salão Júnior</p>
              </div>

           
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-sm">Agosto</p>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
   
  );
}

