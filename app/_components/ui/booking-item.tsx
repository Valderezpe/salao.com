import { Avatar, AvatarImage } from "./avatar"
import { Badge } from "./badge"
import { Card, CardContent } from "./card"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
