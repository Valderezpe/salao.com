import PhoneItem from "@/app/_components/phone-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import ServiceItem from "@/app/service-item"

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbeshop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbeshop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbeshop.name}
          src={barbeshop?.imageUrl}
          fill
          className="object-cover"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbeshop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbeshop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">(799 avaliações)</p>
        </div>
      </div>
      {/*Descrição*/}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbeshop?.description}</p>
      </div>
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="mb-2 text-sm font-bold uppercase text-gray-400">
          Serviços
        </h2>
        <div className="space-y-2">
          {barbeshop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="space-y-2 p-3">
        {barbeshop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
