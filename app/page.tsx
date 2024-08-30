import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import BarbershopItem from "./_components/ui/barbershop-item"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import Header from "./_components/ui/header"
import { Input } from "./_components/ui/input"
import { db } from "./_lib/prisma"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  // console.log({ barbershops })
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Valderez</h2>
        <p>Domingo, 25 de agosto</p>

        <div className="mt-4 flex items-center gap-2">
          <Input placeholder="Faça sua buscar.." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores salão"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-500">
          Agendamentos
        </h2>

        <Card className="min-w-full max-w-full">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm">Salão Júnior</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">27</p>
              <p className="text-sm">16h20</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-500">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
